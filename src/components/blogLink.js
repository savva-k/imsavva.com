import React from "react"

import { Link } from "gatsby"
import Img from "gatsby-image"
import NoImage from "../components/noImage"
import datePng from "../images/date.png"

const noTextDecoration = {
  textDecoration: "none",
}

const linkStyle = {
  fontFamily: `'Press Start 2P'`,
  fontSize: 14,
  lineHeight: 2,
  color: "white",
  backgroundColor: "#E36397",
  padding: "1em",
  marginBottom: 0,
}

const imageContainerStyle = {
  border: "1em solid #F4E59E",
}

const excerptStyle = {
  marginTop: "1em",
}

const dateStyle = {
  marginTop: "1em",
  marginBottom: "3em",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "right",
}

const BlogLink = ({ slug, title, excerpt, image, date, source }) => {
  return (
    <div>
      <Link to={`/${slug}`} style={noTextDecoration} state={{ source: source }}>
        <h3 style={linkStyle}>{title}</h3>
        <div style={imageContainerStyle}>
          {image ? (
            <Img fluid={image.childImageSharp.fluid} />
          ) : (
            <NoImage title={title} />
          )}
        </div>
      </Link>
      <div style={excerptStyle}>{excerpt}</div>
      <div style={dateStyle}>
        <img
          src={datePng}
          width="16"
          style={{ marginBottom: "0.2em", marginRight: "0.5em" }}
          alt="Posted on"
        />
        <div>{date}</div>
      </div>
    </div>
  )
}

export default BlogLink
