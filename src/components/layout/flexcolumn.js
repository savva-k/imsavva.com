import React from "react"

const FlexColumn = props => {
  return (
    <div
      style={{
        width: props.width,
        height: props.height,
      }}
    >
      {props.children}
    </div>
  )
}

export default FlexColumn
