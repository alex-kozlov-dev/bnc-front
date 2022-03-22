import { lorem } from 'mock/lorem'
import { ResponsiveContainer } from 'src/components/ResponsiveContainer'
import { t } from 'src/theme'
import styled from 'styled-components'
import { Splash } from './Splash'

const Spacer = styled.div`
  padding: 24px 0;
`

const Title = styled.h2`
  ${t.typography.head[3].regular}
`

const Text = styled.p`
  ${t.typography.text[1].regular}
`

type Props = {
  splash: {
    title: string;
    text: string;
  }
}

export const Home = ({ splash }: Props) => {
  return (
    <>
      <Splash {...splash} />
      <Spacer>
        <ResponsiveContainer>
          <Title>
            {lorem(3)}
          </Title>
          <Text>
            {lorem()}
          </Text>
        </ResponsiveContainer>
      </Spacer>
      <Spacer>
        <ResponsiveContainer>
          <Title>
            {lorem(3)}
          </Title>
          <Text>
            {lorem()}
          </Text>
        </ResponsiveContainer>
      </Spacer>
      <Spacer>
        <ResponsiveContainer>
          <Title>
            {lorem(3)}
          </Title>
          <Text>
            {lorem()}
          </Text>
        </ResponsiveContainer>
      </Spacer>
    </>
  )
}
