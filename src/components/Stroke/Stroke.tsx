import { FC } from 'react'
import styled from 'styled-components'

import strokeYellow from './stroke-yellow.svg'
import strokeBlue from './stroke-blue.svg'

const Span = styled.span<{ blue: boolean }>`
  position: relative;
  display: inline-block;
  &:before {
    display: block;
    content: '';
    position: absolute;
    z-index: 0;
    left: -0.25em;
    right: -0.25em;
    bottom: -0.25em;
    height: 0.8em;
    background: url(${({ blue }) => blue ? strokeBlue.src : strokeYellow.src});
    background-size: 100% 100%;
  }
`

const Inner = styled.span`
  position: relative;
  z-index: 1;
`

type Props = {
  blue?: boolean;
}

export const Stroke: FC<Props> = ({ blue = false, children }) => {
  return (
    <Span blue={blue}>
      <Inner>
        {children}
      </Inner>
    </Span>
  )
}
