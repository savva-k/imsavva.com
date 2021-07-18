import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/pageTitle"
import folderPng from "../images/folder.png"
import Tags from "../components/tags"
import BlogLinks from "../components/blogLinks"
import Pagination from "../components/pagination"

const CategoryPage = ({
  pageContext: { category, tags, numPages, currentPage },
  data,
  location,
}) => {
  return (
    <Layout showNavigation={true}>
      <Seo title={`${category} category`} />
      <Header header={category} img={folderPng} />
      <Tags tags={tags} />
      <Pagination
        numPages={numPages}
        current={currentPage}
        path={`/category/${category}`}
      />
      <BlogLinks
        posts={data.posts.edges}
        source={{ name: category, path: location.pathname }}
      />
      <Pagination
        numPages={numPages}
        current={currentPage}
        path={`/category/${category}`}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query CategoryPosts($skip: Int!, $limit: Int!, $category: String!) {
    posts: allMdx(
      limit: $limit
      skip: $skip
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { categories: { eq: $category } } }
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

export default CategoryPage
