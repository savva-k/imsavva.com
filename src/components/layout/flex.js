import React from "react"

const Flex = props => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: props.direction || "row",
      }}
    >
      {props.children}
    </div>
  )
}

export default Flex
