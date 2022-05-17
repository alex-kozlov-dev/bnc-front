import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { theme } from 'src/theme'
import styled from 'styled-components'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Heading } from '../../components/Typography'

const Container = styled(Section)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 24px ${theme.layout.spacing.m};
`

type Props = {
  cta: string;
}

export const CTASection = ({ cta }: Props) => {
  const { t } = useTranslation()

  return (
    <Container variant="black">
        <Heading typography={theme.typography.head[2].regular}>
          {cta}
        </Heading>
        <Link href="/donate" passHref>
          <Button as="a" variant="primary-inverse">
            {t('Donate now')}
          </Button>
        </Link>
    </Container>
  )
}
