import { Section } from 'src/components/Section'
import { Wysiwyg } from 'src/components/Wysiwyg'
import { theme } from 'src/theme'
import styled from 'styled-components'

const Container = styled(Section).attrs({
  variant: 'gray'
})`
  display: flex;
  align-items: stretch;
  @media (max-width: ${theme.responsive.tablet}) {
    flex-direction: column-reverse;
  }
`

const Left = styled.div`
  box-sizing: border-box;
  width: 50%;
  padding: ${theme.layout.spacing.m};

  @media (max-width: ${theme.responsive.tablet}) {
    width: 100%;
  }
`

const Right = styled.div`
  width: 50%;
  position: relative;

  @media (max-width: ${theme.responsive.tablet}) {
    width: 100%;
  }
`

const Image = styled.img`
  display: block;
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;

  @media (max-width: ${theme.responsive.tablet}) {
    position: unset;
    height: auto;
  }
`

type Props = {
  text: string;
  image: string;
}

export const TextImageSection = ({ text, image }: Props) => {
  return (
    <Container variant="gray">
      <Left>
        <Wysiwyg content={text} />
      </Left>
      <Right>
        <Image src={image} />
      </Right>
    </Container>
  )
}
