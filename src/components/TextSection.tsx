import { Section } from 'src/components/Section'
import { Wysiwyg } from 'src/components/Wysiwyg'
import { theme } from 'src/theme'
import styled from 'styled-components'

const Container = styled(Section).attrs({
  variant: 'white'
})`
  padding: ${theme.layout.spacing.m};

  @media (max-width: ${theme.responsive.mobile}) {
    padding: ${theme.layout.spacing.xs};
  }
`

const Inner = styled.div`
  margin: 0 auto;
  max-width: 1024px;
`

type Props = {
  text: string;
  className?: string;
}

export const TextSection = ({ text, className }: Props) => {
  return (
    <Container className={className}>
      <Inner>
        <Wysiwyg content={text} />
      </Inner>
    </Container>
  )
}
