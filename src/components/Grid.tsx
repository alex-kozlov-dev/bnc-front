import { theme } from 'src/theme'
import styled, { css } from 'styled-components'

type Responsive<T> = {
  desktop?: T;
  tablet?: T;
  mobile?: T;
}

type Size = number | Responsive<number> | undefined;

const getSize = (screenSize: string) => ({ size }: { size?: Size }) => {
  if (typeof size === 'number' || !size) {
    return size
  }

  const { desktop = undefined, tablet = desktop, mobile = tablet } = size

  return { desktop, tablet, mobile }[screenSize]
}

type Hide = Responsive<true> | undefined;

const getHide = (screenSize: string) => ({ hide }: { hide?: Hide }) => {
  if (!hide) return ''

  // @ts-ignore
  return hide[screenSize] ? 'display: none;' : ''
}

export const Col = styled.div<{ size?: Size; hide?: Hide }>`
  box-sizing: border-box;
  flex: 1;
  ${({ size }) => size
? css<{ size?: Size; hide?: Hide }>`
    flex: 0 0 auto;
    width: calc(${getSize('desktop')} * 100% / 12);
    
    @media (max-width: ${theme.responsive.tablet}) {
      width: calc(${getSize('tablet')} * 100% / 12);
    }

    @media (max-width: ${theme.responsive.mobile}) {
      width: calc(${getSize('mobile')} * 100% / 12);
    }

    && {
      ${getHide('desktop')}
      @media (max-width: ${theme.responsive.tablet}) {
        ${getHide('tablet')}
      }

      @media (max-width: ${theme.responsive.mobile}) {
        ${getHide('mobile')}
      }
    }
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
