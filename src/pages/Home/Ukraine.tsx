import styled from 'styled-components'
import mapImage from 'src/img/ukraine.svg'

export const Ukraine = styled.img`
  display: block;
  mask: url(${mapImage.src}) no-repeat;
  mask-size: 100%;
  width: 100%;
`
