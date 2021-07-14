import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogLinks from "../components/blogLinks"
import Header from "../components/pageTitle"
import dinoPng from "../images/dinosaur.png"

const IndexPage = ({ data }) => {
  const posts = data.posts.edges
  return (
    <Layout showNavigation={true}>
      <SEO title="Home" />
      <Header header="Latest posts" img={dinoPng} />
      <BlogLinks posts={posts} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    posts: allMdx(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 5
    ) {
      edges {
        node {
          excerpt(pruneLength: 320)
          slug
          frontmatter {
            author
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
        }
      }
    }
  }
`

export default IndexPage
