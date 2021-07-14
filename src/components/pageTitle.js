import React from "react"

const noPadding = {
  padding: 0,
  margin: 0,
}

const headerStyle = {
  ...noPadding,
  fontFamily: `'Press Start 2P'`,
  fontSize: "1em",
  lineHeight: "2em",
  color: "rebeccapurple",
}

const containerStyle = {
  ...noPadding,
  display: "flex",
  flexFlow: "row nowrap",
  alignItems: "center",
  marginBottom: "1em",
}

const imgContainer = {
  ...noPadding,
  width: "3em",
  height: "3em",
  marginRight: "1em",
}

const Header = ({ header, img }) => {
  return (
    <div style={containerStyle}>
      {img && (
        <div style={imgContainer}>
          <img src={img} alt="Folder icon" />
        </div>
      )}
      <div style={noPadding}>
        <h1 style={headerStyle}>{header}</h1>
      </div>
    </div>
  )
}

export default Header
