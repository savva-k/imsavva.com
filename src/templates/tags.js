import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import BlogLinks from "../components/blogLinks"
import Header from "../components/pageTitle"
import folderPng from "../images/folder.png"
import Tags from "../components/tags"
import Pagination from "../components/pagination"

const TagsPage = ({
  pageContext: { tag, tags, numPages, currentPage },
  data,
  location,
}) => {
  return (
    <Layout showNavigation={true}>
      <Seo title="Home" />
      <Header header={`Tags / ${tag}`} img={folderPng} />
      <Tags tags={tags} />
      <Pagination
        numPages={numPages}
        current={currentPage}
        path={`/tags/${tag}`}
      />
      <BlogLinks
        source={{ name: tag, path: location.pathname }}
        posts={data.posts.edges}
      />
      <Pagination
        numPages={numPages}
        current={currentPage}
        path={`/tags/${tag}`}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query TagsPosts($skip: Int!, $limit: Int!, $tag: String!) {
    posts: allMdx(
      filter: { frontmatter: { tags: { eq: $tag } } }
      skip: $skip
      limit: $limit
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          slug
          frontmatter {
            title
            date
            image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          id
          excerpt(pruneLength: 320)
        }
      }
    }
  }
`

export default TagsPage
