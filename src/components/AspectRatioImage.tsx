import styled from 'styled-components'

const Container = styled.div<{ aspectRatio: number }>`
  position: relative;
  &:before {
    display: block;
    content: '';
    padding-bottom: calc(100% / ${({ aspectRatio }) => aspectRatio});
  }
`

const Image = styled.img`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

type Props = {
  src: string;
  alt: string;
  aspectRatio: number;
  className?: string;
}

export const AspectRatioImage = ({ src, alt, aspectRatio, className }: Props) => {
  return (
    <Container className={className} aspectRatio={aspectRatio}>
      <Image src={src} alt={alt} />
    </Container>
  )
}
