import { theme } from 'src/theme'
import styled from 'styled-components'
import { Button } from 'src/components/Button'
import { Heading, Text } from 'src/components/Typography'
import { Rhytm } from 'src/components/Rhytm'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { Stroke } from 'src/components/Stroke/Stroke'

const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  height: 100vh;
  max-height: 728px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.l};
  margin-top: calc(-${theme.sizes.topHeader} - ${theme.sizes.header});
  padding-top: calc(${theme.sizes.topHeader} + ${theme.sizes.header});
`

const Inner = styled.div`
  max-width: ${theme.layout.width.wide};
  padding: 0 ${theme.layout.spacing.m};
  margin: 0 auto;
  display: flex;
  align-items: center;

  @media (max-width: ${theme.responsive.mobile}) {
    padding: 0 ${theme.spacing.xs};
  }
`

const Left = styled.div`
  flex: 1;
  padding-left: ${theme.layout.spacing.m};
  padding-right: ${theme.layout.spacing.s};
  @media (max-width: ${theme.responsive.tablet}) {
    padding: 0 ${theme.spacing.m};
  }
`

const Right = styled.div`
  flex: 1;
  @media (max-width: ${theme.responsive.tablet}) {
    display: none;
  }
`

const Title = styled(Heading).attrs({
  typography: theme.typography.head[2.5].italic
})`
  line-height: 1;

  @media (max-width: ${theme.responsive.mobile}) {
    ${theme.typography.head[2].italic}
  }
`

const Image = styled.img`
  display: block;
  width: 100%;
`

type Props = {
  title: string;
  text: string;
  image: string;
}

export const Splash = ({ title, text, image }: Props) => {
  const { t } = useTranslation()

  return (
    <Container>
      <Inner>
        <Left>
            <Rhytm>
              <Title typography={theme.typography.head[2.5].italic}>
                <Stroke>
                  {title}
                </Stroke>
              </Title>
              <Text>
                {text}
              </Text>
              <Link href="/donate" passHref>
                <Button as="a">
                  {t('Donate now')}
                </Button>
              </Link>
            </Rhytm>
        </Left>
        <Right>
        <Image src={image} alt={title} />
        </Right>
      </Inner>
    </Container>
  )
}
