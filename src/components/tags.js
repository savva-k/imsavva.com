import React from "react"
import Chip from "../components/chip"

const tagsContainerStyle = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginBottom: "1em",
}

const tags = ({ tags }) => {
  return (
    <div style={tagsContainerStyle}>
      {tags.map(tag => {
        return (
          <Chip label={tag.label} color={tag.color} key={`tag_${tag.label}`} />
        )
      })}
    </div>
  )
}

export default tags
