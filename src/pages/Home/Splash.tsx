import { t } from 'src/theme'
import styled from 'styled-components'
import { Button } from 'src/components/Button'
import { Ukraine } from './Ukraine'

const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  background: ${t.colors.yellow};
  background-size: cover;
  height: 100vh;
  max-height: 728px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px;
  gap: ${t.spacing.l};
`

const UkraineImage = styled(Ukraine)`
  flex: 1;
  max-width: 520px;
  min-width: 0;
`

const Inner = styled.div`
  flex: 1;
  max-width: 520px;
  position: relative;
  z-index: 1;
`

const Title = styled.h1`
  ${t.reset.h}
  ${t.typography.head[3].italic}
  line-height: 1em;
  margin-bottom: 0.5em;
`

const Text = styled.p`
  ${t.typography.text[1].regular}
`

type Props = {
  title: string;
  text: string;
}

export const Splash = ({ title, text }: Props) => {
  return (
    <>
      {/* <Clip /> */}
      <Container>
        <Inner>
          <Title>
            {title}
          </Title>
          <Text>
            {text}
          </Text>
          <Button>
            Donate now
          </Button>
        </Inner>
        <UkraineImage />
      </Container>
    </>
  )
}
