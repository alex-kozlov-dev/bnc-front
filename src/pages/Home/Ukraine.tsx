import styled from 'styled-components'
import splashImage from 'src/img/splash.jpg'
import mapImage from 'src/img/ukraine.svg'

export const Ukraine = styled.img.attrs({
  src: splashImage.src
})`
  display: block;
  mask: url(${mapImage.src}) no-repeat;
  mask-size: 100%;
  width: 100%;
`
