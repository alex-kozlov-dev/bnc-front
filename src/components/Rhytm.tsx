import styled from 'styled-components'

type Props = {
  margin?: number;
}

export const Rhytm = styled.div<Props>`
  && > * + * {
    margin-top: ${({ margin = 1.3 }) => `${margin}em`};
  }
`
