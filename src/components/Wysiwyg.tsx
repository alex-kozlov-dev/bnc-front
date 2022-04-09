import { theme } from 'src/theme'
import styled from 'styled-components'

const Container = styled.div`
  line-height: 1.3;
  font-size: 16px;

  p {
    ${theme.reset.text}
  }

  h1 {
    font-size: 2em;
  }

  h2 {
    font-size: 1.5em;
  }

  h3 {
    font-size: 1.17em;
  }

  h1, h2, h3, h4, h5, h6 {
    ${theme.reset.text}
  }

  ul, ol {
    padding-left: 2em;
  }

  blockquote {
    margin: 0;
    padding-left: 1em;
    border-left: 5px solid ${theme.colors.gray[1]};
  }

  a {
    color: ${theme.colors.blue};
  }

  .ql-indent-1 {
    padding-left: 4.5em;
  }

  .ql-indent-2 {
    padding-left: 7.5em;
  }

  .ql-indent-3 {
    padding-left: 10.5em;
  }

  .ql-indent-4 {
    padding-left: 13.5em;
  }

  .ql-indent-5 {
    padding-left: 16.5em;
  }

  .ql-indent-6 {
    padding-left: 19.5em;
  }

  .ql-indent-7 {
    padding-left: 22.5em;
  }

  .ql-indent-8 {
    padding-left: 25.5em;
  }
`

type Props = {
  content: string;
  className?: string;
}

export const Wysiwyg = ({ content, className }: Props) => {
  return (
    <Container className={className} dangerouslySetInnerHTML={{ __html: content || '' }} />
  )
}
