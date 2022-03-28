// import { IconName } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { t } from 'src/theme'
import styled from 'styled-components'
import { Icon } from '../Icon'
import { Rhytm } from '../Rhytm'
import { Section, SectionProps } from '../Section'
import { Heading, Text } from '../Typography'

const Container = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: ${t.spacing.m};
`

const Item = styled.div`
  position: relative;
  border: 1px solid ${t.colors.gray[3]};
  padding: ${t.spacing.l};
  margin-top: 32px;
  background: white;
  border-radius: ${t.borderRadius.m};
`

const IconContainer = styled.div`
  position: absolute;
  width: 96px;
  height: 96px;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 100%;
  border: 1px solid ${t.colors.gray[3]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${t.colors.gray[5]};
`

type Props = SectionProps & {
  items: {
    // icon: IconName;
    icon: any;
    title: string;
    text: string;
  }[]
}

export const IconTextListSection = ({ items, ...props }: Props) => {
  return (
    <Section size="wide" {...props}>
      <Container>
        {items.map(({ icon, title, text }, i) => (
          <Item key={i}>
            <Rhytm>
              <IconContainer>
                <Icon prefix='fas' icon={icon} size="2x" />
              </IconContainer>
              <Heading typography={t.typography.head['1.5'].regular} align="center">
                {title}
              </Heading>
              <Text>
                {text}
              </Text>
            </Rhytm>
          </Item>
        ))}
      </Container>
    </Section>
  )
}
