import { theme } from 'src/theme'
import styled from 'styled-components'
import { Button } from 'src/components/Button'
import { Ukraine } from './Ukraine'
import { Heading, Text } from 'src/components/Typography'
import { Rhytm } from 'src/components/Rhytm'
import { Content } from 'src/components/Content'
import { Col, Row } from 'src/components/Grid'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'

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

const Title = styled(Heading)`
  line-height: 1;
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
      <Content size='wide'>
        <Row align='center'>
          <Col size={6}>
            <Rhytm>
              <Title typography={theme.typography.head[2.5].italic}>
                {title}
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
          </Col>
          <Col size={6}>
            <Ukraine src={image} alt={title} />
          </Col>
        </Row>
      </Content>
    </Container>
  )
}
