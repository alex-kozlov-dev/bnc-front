import { theme } from 'src/theme'
import styled from 'styled-components'

export const Col = styled.div<{ size?: number }>`
  box-sizing: border-box;
  flex: 1;
  ${({ size }) => size
? `
    flex: 0 0 auto;
    width: calc(${size} * 100% / 12);
  `
: ''}
`

type RowProps = {
  align?: 'start' | 'end' | 'center';
  justify?: 'start' | 'end' | 'center' | 'space-between' | 'space-around';
  gap?: keyof typeof theme.spacing;
}

export const Row = styled.div<RowProps>`
  display: flex;
  flex-wrap: wrap;
  align-items: ${({ align }) => align || 'unset'};
  justify-content: ${({ justify }) => justify || 'unset'};
  margin: calc(${({ gap = 'l' }) => theme.spacing[gap]} / -2);

  & > ${Col} {
    padding: calc(${({ gap = 'l' }) => theme.spacing[gap]} / 2);
  }
`
