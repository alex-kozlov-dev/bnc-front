import { useTranslation } from 'react-i18next'
import { theme } from 'src/theme'
import styled from 'styled-components'
import { Button } from '../Button'
import { Section, SectionProps } from '../Section'
import { Heading } from '../Typography'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.xl};
`

type Props = SectionProps & {
  title: string;
}

export const DonateCTASection = ({ title, ...props }: Props) => {
  const { t } = useTranslation()

  return (
    <Section variant="black" size="wide" {...props}>
      <Container>
        <Heading typography={theme.typography.head[2].regular}>
          {title}
        </Heading>
        <Button variant="primary-inverse">
          {t('Donate now')}
        </Button>
      </Container>
    </Section>
  )
}
