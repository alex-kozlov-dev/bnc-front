import { Rhytm } from 'src/components/Rhytm'
import { Text } from 'src/components/Typography'
import { Wysiwyg } from 'src/components/Wysiwyg'
import { theme } from 'src/theme'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  gap: 16px;
`

const Icon = styled.img`
  display: block;
  width: 116px;
  height: 116px;
`

type Props = {
  icon: string;
  title: string;
  text: string;
};

export const Item = ({ icon, title, text }: Props) => {
  return (
    <Container>
      <Icon src={icon}/>
      <Rhytm margin={0.5}>
        <Text typography={theme.typography.text['1.5'].bold}>
          {title}
        </Text>
        <Text>
          <Wysiwyg content={text}/>
        </Text>
      </Rhytm>
    </Container>
  )
}
