import React from "react"
import { Link } from "gatsby"

const chipStyle = {
  borderRadius: "0.5em",
  color: "white",
  padding: "0.5em",
  margin: "0.5em",
  fontWeight: "bold",
}

const linkStyle = {
  textDecoration: "none",
}

const chip = ({ label, color }) => {
  const style = {
    ...chipStyle,
    backgroundColor: color,
  }
  return (
    <Link to={`/tags/${label}`} style={linkStyle}>
      <div style={style}>{label}</div>
    </Link>
  )
}

export default chip
