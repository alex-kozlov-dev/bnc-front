import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { DonateCtaPageSection } from 'src/api/types'
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
  data: DonateCtaPageSection;
}

export const DonateCTASection = ({ data, ...props }: Props) => {
  const { t } = useTranslation()

  return (
    <Section variant="black" size="wide" {...props}>
      <Container>
        <Heading typography={theme.typography.head[2].regular}>
          {data.cta}
        </Heading>
        <Link href="/donate" passHref>
          <Button as="a" variant="primary-inverse">
            {t('Donate now')}
          </Button>
        </Link>
      </Container>
    </Section>
  )
}
