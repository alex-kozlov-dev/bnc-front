import { theme } from 'src/theme'
import styled, { css } from 'styled-components'

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type CommonProps = {
  typography?: string;
  align?: 'left' | 'right' | 'center';
}

const common = css<CommonProps>`
  ${theme.reset.text}
  ${({ typography }) => typography || ''}
  text-align: ${({ align }) => align || 'unset'};
`

export const Heading = styled.h1<CommonProps & { as?: HeadingTag }>`
  ${theme.typography.head[2].regular}
  ${common}
`

type TextProps = {
  whiteSpace?: 'pre-line';
}

export const Text = styled.p<CommonProps & TextProps>`
  ${theme.typography.text[1].regular}
  ${common}
  white-space: ${({ whiteSpace }) => whiteSpace || 'unset'};
`
