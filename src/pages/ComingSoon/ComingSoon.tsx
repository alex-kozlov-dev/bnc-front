import { useTranslation } from 'react-i18next'
import { Heading, Text } from 'src/components/Typography'
import { SharedData } from 'src/nextHelpers'
import { theme } from 'src/theme'
import styled from 'styled-components'

const Logo = styled.img`
  height: 100px;
  display: block;
`

const LinksList = styled.ul`
  ${theme.reset.ul}
  display: flex;
  gap: ${theme.spacing.m};
`

const LinksItem = styled.li`
  ${theme.reset.li}
  padding: 0;
`

const Link = styled.a`
  ${theme.reset.link}
  transition: color 0.2s;
  &:hover {
    color: ${theme.colors.blue};
  }
`

const Container = styled.div`
  width: 100vw;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.m};
  flex-direction: column;
`

type Props = SharedData

export const ComingSoon = ({ meta }: Props) => {
  const { t } = useTranslation()

  return (
    <Container>
      <Logo src={meta.logo} />
      <Heading typography={theme.typography.head['1.5'].regular} >{t('Coming soon')}...</Heading>
      <LinksList>
        <LinksItem>
          <Link href={`mailto:${meta.email}`}>
            {meta.email}
          </Link>
        </LinksItem>
        <LinksItem>
          <Link href={`tel:${meta.phone_number}`}>
            {meta.phone_number}
          </Link>
        </LinksItem>
      </LinksList>
      <Text whiteSpace='pre-line'>
        {meta.address}
      </Text>
    </Container>
  )
}
