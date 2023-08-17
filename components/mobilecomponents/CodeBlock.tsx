import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const CodeBlock = (props: { value: string; language: string }) => {
  const { language, value } = props
  return (
    <SyntaxHighlighter language={language} style={materialDark}>
      {value}
    </SyntaxHighlighter>
  )
}

export default CodeBlock
