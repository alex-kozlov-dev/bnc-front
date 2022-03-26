import { t } from 'src/theme'
import styled from 'styled-components'
import { Button } from '../Button'
import { Section, SectionProps } from '../Section'
import { Heading } from '../Typography'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${t.spacing.xl};
`

type Props = SectionProps & {
  title: string;
}

export const DonateCTASection = ({ title, ...props }: Props) => {
  return (
    <Section variant="black" size="wide" {...props}>
      <Container>
        <Heading typography={t.typography.head['1.5'].regular}>
          {title}
        </Heading>
        <Button variant="primary-inverse">
          Donate now
        </Button>
      </Container>
    </Section>
  )
}
