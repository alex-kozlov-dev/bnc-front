import { t } from 'src/theme'
import styled from 'styled-components'

const sizes = {
  ...t.sizes.content,
  'full-width': '100%'
}

export type ContentSize = keyof typeof sizes;

type Props = {
  size?: ContentSize;
};

export const Content = styled.div<Props>`
  box-sizing: border-box;
  padding: ${t.spacing.s} ${t.spacing.m};
  width: 100%;
  max-width: ${({ size = 'narrow' }) => sizes[size]};
  margin: 0 auto;
`
