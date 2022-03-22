import { t } from 'src/theme'
import styled from 'styled-components'

export const Logo = styled.div.attrs({
  children: 'BNC'
})`
  display: inline-block;
  ${t.typography.head[3].regular}
  font-size: 2em;
  line-height: 1;
`
