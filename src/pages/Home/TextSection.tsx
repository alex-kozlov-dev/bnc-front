import { Section } from 'src/components/Section'
import { Wysiwyg } from 'src/components/Wysiwyg'
import { theme } from 'src/theme'
import styled from 'styled-components'

const Container = styled(Section).attrs({
  variant: 'white'
})`
  padding: ${theme.layout.spacing.m};
`

const Inner = styled.div`
  margin: 0 auto;
  max-width: 1024px;
`

type Props = {
  text: string;
}

export const TextSection = ({ text }: Props) => {
  return (
    <Container>
      <Inner>
        <Wysiwyg content={text} />
      </Inner>
    </Container>
  )
}
