exports.createPages = async ({ actions, graphql, reporter }) => {
  const POSTS_PER_PAGE = 7
  const { createPage } = actions

  const blogPostTemplate = require.resolve(`./src/templates/markdownPost.js`)
  const blogCategory = require.resolve(`./src/templates/blogCategory.js`)
  const tagPage = require.resolve(`./src/templates/tags.js`)
  const randomColor = require("randomcolor")

  const result = await graphql(`
    {
      categories: allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        group(field: frontmatter___categories) {
          name: fieldValue
          posts: edges {
            node {
              excerpt
              slug
              frontmatter {
                author
                title
                categories
                tags
              }
              id
            }
          }
        }
      }
      tags: allMdx {
        group(field: frontmatter___tags) {
          name: fieldValue
          posts: edges {
            node {
              frontmatter {
                tags
              }
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL queries.`)
    return
  }

  const allTags = result.data.tags.group.map(tag => {
    return { label: tag.name, color: randomColor() }
  })

  result.data.categories.group.forEach(category => {
    category.posts.forEach(({ node }) => {
      console.log("creating post page " + node.slug)
      createPage({
        path: node.slug,
        component: blogPostTemplate,
        context: {
          slug: node.slug,
          tags: allTags.filter(tag =>
            node.frontmatter.tags.includes(tag.label)
          ),
        },
      })
    })
  })

  result.data.categories.group.forEach(category => {
    console.log("creating category page" + category.name)
    const numPages = Math.ceil(category.posts.length / POSTS_PER_PAGE)

    for (let page = 0; page < numPages; page++) {
      createPage({
        path:
          page === 0
            ? `category/${category.name}`
            : `category/${category.name}/${page}`,
        component: blogCategory,
        context: {
          category: category.name,
          tags: allTags.filter(tag =>
            [
              ...new Set(
                category.posts.flatMap(({ node }) => node.frontmatter.tags)
              ),
            ].includes(tag.label)
          ),
          limit: POSTS_PER_PAGE,
          skip: page * POSTS_PER_PAGE,
          numPages,
          currentPage: page + 1,
        },
      })
    }
  })

  result.data.tags.group.forEach(tag => {
    console.log("creating tag page " + tag.name)
    const numPages = Math.ceil(tag.posts.length / POSTS_PER_PAGE)
    for (page = 0; page < numPages; page++) {
      createPage({
        path: page === 0 ? `tags/${tag.name}` : `tags/${tag.name}/${page}`,
        component: tagPage,
        context: {
          tags: allTags,
          tag: tag.name,
          skip: page * POSTS_PER_PAGE,
          limit: POSTS_PER_PAGE,
          numPages,
          currentPage: page + 1,
        },
      })
    }
  })
}
