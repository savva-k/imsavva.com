import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Flex from "../components/layout/flex"
import FlexColumn from "../components/layout/flexcolumn"
import Navigation from "../components/navigation"
import { BrowserView, MobileView, isMobile } from "react-device-detect"
import Header from "./header"
import "./layout.css"

const width = 960

const footerStyle = {
  fontFamily: `'Press Start 2P'`,
  fontSize: 10,
  backgroundColor: "#1a1d1a",
  color: "#F4E59E",
  marginTop: `2rem`,
  minHeight: "4em",
  display: "flex",
  alignItems: "center",
  paddingLeft: "1em",
}

const Layout = ({ children, source, showNavigation }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const container = {
    margin: `0 auto`,
  }

  const containerStyle = isMobile
    ? { ...container, maxWidth: `${window.screen.width}px` }
    : { ...container, maxWidth: `${width}px`, width: `${width}px` }

  const containerStyleMain = {
    ...containerStyle,
    padding: `0 1.0875rem 1.45rem`,
    flex: 1,
  }

  return (
    <>
      <Header
        source={source}
        siteTitle={data.site.siteMetadata?.title || `Title`}
      />
      <div style={containerStyleMain}>
        <main style={{ fontFamily: "Helvetica" }}>
          <BrowserView>
            {showNavigation ? (
              <Flex>
                <FlexColumn width="25%">
                  <Navigation />
                </FlexColumn>
                <FlexColumn width="75%">{children}</FlexColumn>
              </Flex>
            ) : (
              children
            )}
          </BrowserView>
          <MobileView>
            {showNavigation && (
              <div>
                <Navigation />
              </div>
            )}

            <div>{children}</div>
          </MobileView>
        </main>
      </div>

      <footer style={footerStyle}>
        <div style={containerStyle}>Do I really need the footer?</div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
