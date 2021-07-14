import React from "react"
import { Link } from "gatsby"

const paginationContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  marginBottom: "1em",
  fontFamily: `'Press Start 2P'`,
  fontSize: 14,
}

const commonLinkStyle = {
  display: "flex",
  padding: "1em",
  width: "2em",
  height: "2em",
  justifyContent: "center",
  alignItems: "center",
  marginRight: "1em",
  border: "1px solid #6E2594",
  color: "#6E2594",
}

const pageLinkStyle = {
  ...commonLinkStyle,
}

const currentPageStyle = {
  ...commonLinkStyle,
  backgroundColor: "#6E2594",
  color: "#F4E59E",
}

const linkWrapperStyle = {
  textDecoration: "none",
}

export default function Pagination({ numPages, current, path }) {
  const pages = () => {
    const pages = []
    for (let page = 0; page < numPages; page++) {
      pages.push(
        page === current - 1 ? (
          <div key={page} style={currentPageStyle}>
            {page + 1}
          </div>
        ) : (
          <Link
            key={`goto_page_${page}`}
            to={page === 0 ? path : `${path}/${page}`}
            style={linkWrapperStyle}
          >
            <div style={pageLinkStyle}>{page + 1}</div>
          </Link>
        )
      )
    }
    return pages
  }
  return numPages > 1 && <div style={paginationContainer}>{pages()}</div>
}
