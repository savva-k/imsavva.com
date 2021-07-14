import React from "react"
import BlogLink from "../components/blogLink"

export default function BlogLinks({ posts, source }) {
  return (
    <>
      {posts.map(({ node }) => {
        console.log(node.slug)
        return (
          <BlogLink
            slug={node.slug}
            key={node.slug}
            title={node.frontmatter.title}
            excerpt={node.excerpt}
            image={node.frontmatter.image}
            date={node.frontmatter.date}
            source={source}
          />
        )
      })}
    </>
  )
}
