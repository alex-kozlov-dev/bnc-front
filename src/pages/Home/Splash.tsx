import { t } from 'src/theme'
import styled from 'styled-components'
import { Button } from 'src/components/Button'
import { Ukraine } from './Ukraine'
import { Heading, Text } from 'src/components/Typography'
import { Rhytm } from 'src/components/Rhytm'
import { Content } from 'src/components/Content'
import { Col, Row } from 'src/components/Grid'

const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  height: 100vh;
  max-height: 728px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${t.spacing.l};
  margin-top: calc(-${t.sizes.topHeader} - ${t.sizes.header});
  padding-top: calc(${t.sizes.topHeader} + ${t.sizes.header});
`

const Title = styled(Heading)`
  line-height: 1;
`

type Props = {
  title: string;
  text: string;
}

export const Splash = ({ title, text }: Props) => {
  return (
    <Container>
      <Content size='wide'>
        <Row align='center'>
          <Col size={6}>
            <Rhytm>
              <Title>
                {title}
              </Title>
              <Text>
                {text}
              </Text>
              <Button>
                Donate now
              </Button>
            </Rhytm>
          </Col>
          <Col size={6}>
            <Ukraine />
          </Col>
        </Row>
      </Content>
    </Container>
  )
}
