import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { isMobile } from "react-device-detect"

const liStyle = {
  listStyle: "none",
}

const linkStyle = {
  fontFamily: `'Press Start 2P'`,
  fontSize: 12,
  padding: "0.5em",
  margin: "0.5em",
  textDecoration: "none",
  color: "#663399",
}

const linkStyleMobile = {
  ...linkStyle,
  fontSize: 16,
}

const activeLinkStyle = {
  backgroundColor: "rebeccapurple",
  color: "white",
}

const ulStyle = {
  margin: 0,
  padding: 0,
}

const ulStyleMobile = {
  ...ulStyle,
  marginBottom: "3em",
}

const Navigation = () => {
  let appliedLinkStyle = isMobile ? linkStyleMobile : linkStyle
  let appliedUlStyle = isMobile ? ulStyleMobile : ulStyle
  return (
    <nav>
      <ul style={appliedUlStyle}>
        <li style={liStyle}>
          <Link
            to="/about/"
            style={appliedLinkStyle}
            activeStyle={activeLinkStyle}
          >
            About the author
          </Link>
        </li>
        <li style={liStyle}>
          <Link to="/" style={appliedLinkStyle} activeStyle={activeLinkStyle}>
            Main page
          </Link>
        </li>
        <StaticQuery
          query={graphql`
            query {
              categories: allMdx {
                edges {
                  node {
                    frontmatter {
                      categories
                    }
                  }
                }
              }
            }
          `}
          render={data => {
            const categories = new Set(
              data.categories.edges.flatMap(
                edge => edge.node.frontmatter.categories
              )
            )
            return Array.from(categories).map(category => (
              <li style={liStyle} key={category}>
                <Link
                  to={`/category/${category}`}
                  style={appliedLinkStyle}
                  activeStyle={activeLinkStyle}
                  partiallyActive={true}
                >
                  {category}
                </Link>
              </li>
            ))
          }}
        />
      </ul>
    </nav>
  )
}

export default Navigation
