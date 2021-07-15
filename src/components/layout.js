import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Flex from "../components/layout/flex"
import FlexColumn from "../components/layout/flexcolumn"
import Navigation from "../components/navigation"
import { useMediaQuery } from "react-responsive"
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

const alignCenter = {
  margin: `0 auto`,
}

const containerStyleMobile = {
  ...alignCenter,
  fontFamily: "Helvetica",
  padding: `0 1.0875rem 1.45rem`,
  flex: 1,
}

const containerStyle = {
  ...containerStyleMobile,
  maxWidth: `${width}px`,
  width: `${width}px`,
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

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" })
  console.log('Is tablet or mobile =' + isTabletOrMobile)

  return (
    <>
      <Header
        source={source}
        siteTitle={data.site.siteMetadata?.title || `Title`}
      />
      {!isTabletOrMobile && (
        <div style={containerStyle}>
          <main>
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
          </main>
        </div>
      )}
      {isTabletOrMobile && (
        <div style={containerStyleMobile}>
          <main>
            {showNavigation && (
              <div>
                <Navigation />
              </div>
            )}

            {children}
          </main>
        </div>
      )}

      <footer style={footerStyle}>
        <div style={alignCenter}>Do I really need the footer?</div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
