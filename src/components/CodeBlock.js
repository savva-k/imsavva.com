import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"

export default function CodeBlock({ children, className }) {
  // Pull the className
  const language = className ? className.replace(/language-/, "") || "" : ""

  return (
    <Highlight {...defaultProps} code={children} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{ ...style, overflow: "scroll" }}
        >
          {tokens.map((line, index) => {
            const lineProps = getLineProps({ line, key: index })
            return (
              <div key={index} {...lineProps}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            )
          })}
        </pre>
      )}
    </Highlight>
  )
}
