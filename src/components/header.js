import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { isMobile } from "react-device-detect"

const containerStyle = {
  margin: `0 auto`,
  maxWidth: 960,
  padding: `1.45rem 1.0875rem`,
  display: "flex",
  position: "sticky",
}

const headerLinkStyle = {
  color: `#F4E59E`,
  textDecoration: `none`,
}

const h1Style = {
  margin: 0,
  fontFamily: `'Press Start 2P'`,
  fontSize: 14,
}

const Header = ({ siteTitle, source }) => {
  const containerStyleResponsive = isMobile
    ? {
        ...containerStyle,
        flexDirection: "column",
      }
    : {
        ...containerStyle,
        justifyContent: "space-between",
      }
  const backLinkContainerStyle = isMobile ? { marginTop: "2em" } : {}
  return (
    <header
      style={{
        background: `#6E2594`,
        marginBottom: `1.45rem`,
      }}
    >
      <div style={containerStyleResponsive}>
        <div>
          <h1 style={h1Style}>
            <Link to="/" style={headerLinkStyle}>
              {siteTitle}
            </Link>
          </h1>
        </div>
        {source && (
          <Link to={`${source.path}`} style={headerLinkStyle}>
            <div style={backLinkContainerStyle}>
              <h1 style={h1Style}>&lt; back to {source.name}</h1>
            </div>
          </Link>
        )}
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
