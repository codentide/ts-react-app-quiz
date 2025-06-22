import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

type Props = { children: string }

export const Code: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <div className="code">
      <SyntaxHighlighter language="javascript" style={atomOneDark} customStyle={{ padding: 0 }}>
        {children}
      </SyntaxHighlighter>
    </div>
  )
}
