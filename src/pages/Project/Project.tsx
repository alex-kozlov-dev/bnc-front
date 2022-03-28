import { Section } from 'src/components/Section'
import { Heading, Text } from 'src/components/Typography'
import styled from 'styled-components'

const Splash = styled.div<{ imageUrl: string }>`
  position: relative;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  > * {
    z-index: 1;
  }
`

const Image = styled.img`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.5);
`

export type ProjectProps = {
  imageUrl: string;
  title: string;
  text: string;
}

export const Project = ({ imageUrl, title, text }: ProjectProps) => {
  return (
    <>
      <Splash imageUrl={imageUrl}>
        <Image src={imageUrl} alt={title} />
        <Heading>{title}</Heading>
      </Splash>
      <Section>
        <Text>{text}</Text>
      </Section>
    </>
  )
}
