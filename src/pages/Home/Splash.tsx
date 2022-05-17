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
`

const Left = styled.div`
  box-sizing: border-box;
  width: 50%;
  padding-left: ${theme.layout.spacing.m};
  padding-right: ${theme.layout.spacing.s};
`

const Right = styled.div`
  width: 50%;
`

const Title = styled(Heading)`
  line-height: 1;
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
