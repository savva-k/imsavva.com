import React from "react"
import hashcode from "../utils/Hashcode"
import getExcuse from "../utils/ExcusesGenerator"

const noPadding = {
  padding: 0,
  margin: 0,
}

const imageNotFoundErrorStyle = {
  backgroundColor: "#1e1e1e",
  height: "150px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  fontFamily: "Courier",
  padding: "1em",
}

const redText = {
  color: "#cd3131",
}

const whiteText = {
  color: "white",
}

const yellowText = {
  color: "#dcdcaa",
}

const orangeText = {
  color: "#e6b422",
}

const blueText = {
  color: "#99d8f9",
}

const NoImage = ({ title }) => {
  return (
    <div style={imageNotFoundErrorStyle}>
      <p style={noPadding}>
        <span style={yellowText}>showPostImage</span>
        <span style={orangeText}>(</span>
        <span style={blueText}>{hashcode(title)}</span>
        <span style={orangeText}>)</span>
      </p>
      <p style={noPadding}>
        <span style={redText}>Uncaught exception:</span>{" "}
        <span style={whiteText}>{getExcuse()}</span>
      </p>
    </div>
  )
}

export default NoImage
