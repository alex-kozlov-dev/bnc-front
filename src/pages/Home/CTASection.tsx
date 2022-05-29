import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { theme } from 'src/theme'
import styled from 'styled-components'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Heading } from '../../components/Typography'

const Text = styled(Heading)`
  @media (max-width: ${theme.responsive.tablet}) {
    ${theme.typography.text['1.5'].bold};
  }
`

const Container = styled(Section)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 24px ${theme.layout.spacing.m};

  @media (max-width: ${theme.responsive.mobile}) {
    padding: 24px;
    flex-direction: column;
  }
`

type Props = {
  cta: string;
}

export const CTASection = ({ cta }: Props) => {
  const { t } = useTranslation()

  return (
    <Container variant="black">
        <Text typography={theme.typography.head[2].regular}>
          {cta}
        </Text>
        <Link href="/donate" passHref>
          <Button as="a" variant="primary-inverse">
            {t('Donate now')}
          </Button>
        </Link>
    </Container>
  )
}
