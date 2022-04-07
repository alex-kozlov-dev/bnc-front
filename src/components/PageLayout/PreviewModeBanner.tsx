import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { theme } from 'src/theme'
import styled from 'styled-components'
import { Button } from '../Button'
import { Text } from '../Typography'

const Container = styled.div`
  padding: ${theme.spacing.m};
  background: ${theme.colors.yellow};
  ${theme.shadow[3]}
  display: flex;
  align-items: center;
  gap: ${theme.spacing.l};
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 777;
`

export const PreviewModeBanner = () => {
  const { t } = useTranslation()
  return (
    <Container>
      <Text typography={theme.typography.text[1].bold}>
        {t('Preview mode')}
      </Text>
      <Link href="/api/preview/exit" prefetch={false} passHref>
        <Button as="a">
          {t('Exit')}
        </Button>
      </Link>
    </Container>
  )
}
