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

  & > ${Col} {
    padding: 0 calc(${({ gap = 'xl' }) => theme.spacing[gap]} / 2);
    &:first-child {
      padding-left: 0;
    }
    &:last-child {
      padding-right: 0;
    }
  }
`
