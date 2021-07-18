import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import NoImage from "../components/noImage"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Tags from "../components/tags"
import CodeBlock from "../components/CodeBlock"

const headerStyle = {
  fontFamily: `'Press Start 2P'`,
  fontSize: 15,
  lineHeight: "2.5em",
  backgroundColor: "#E36397",
  color: "white",
  padding: "15px",
}

const imageContainerStyle = {
  backgroundColor: "#F4E59E",
  padding: "1em",
}

const components = {
  pre: props => <div {...props} />,
  code: CodeBlock,
}

const Blog = ({ data: { mdx }, pageContext: { tags }, location }) => {
  const image = mdx.frontmatter.image?.childImageSharp?.fluid
  return (
    <Layout source={location.state?.source} showNavigation={false}>
      <Seo title={mdx.frontmatter.title} />
      <div style={imageContainerStyle}>
        {image ? (
          <Img fluid={image} />
        ) : (
          <NoImage title={mdx.frontmatter.title} />
        )}
      </div>
      <div>
        <h1 style={headerStyle}>{mdx.frontmatter.title}</h1>
        <Tags tags={tags} />
        <MDXProvider components={components}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
        <Tags tags={tags} />
        <div style={{ marginTop: "5em", textAlign: "right" }}>
          Posted on {mdx.frontmatter.date}
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPost($slug: String!) {
    mdx(slug: { eq: $slug }) {
      slug
      frontmatter {
        author
        title
        date
        image {
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      id
      body
    }
  }
`

export default Blog
