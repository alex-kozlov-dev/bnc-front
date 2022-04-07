import { IconTextListPageSection } from 'src/api/types'
import { theme } from 'src/theme'
import styled from 'styled-components'
import { Rhytm } from '../Rhytm'
import { Section, SectionProps } from '../Section'
import { Heading, Text } from '../Typography'

const Container = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: ${theme.spacing.m};
`

const Item = styled.div`
  position: relative;
  border: 1px solid ${theme.colors.gray[3]};
  padding: ${theme.spacing.l};
  margin-top: 32px;
  background: white;
  border-radius: ${theme.borderRadius.m};
`

const IconContainer = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 96px;
  height: 96px;
  top: 0;
  left: 50%;
  padding: ${theme.spacing.m};
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 100%;
  border: 1px solid ${theme.colors.gray[3]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.gray[5]};
`

const Icon = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`

type Props = SectionProps & {
  data: IconTextListPageSection;
}

export const IconTextListSection = ({ data, ...props }: Props) => {
  return (
    <Section size="wide" {...props}>
      <Container>
        {data.icon_text_items.map(({ icon, title, summary, details }, i) => (
          <Item key={i}>
            <Rhytm>
              <IconContainer>
                <Icon src={icon} alt={title} />
              </IconContainer>
              <Heading typography={theme.typography.head[1.5].regular} align="center">
                {title}
              </Heading>
              <Text>
                {summary}
                {details}
              </Text>
            </Rhytm>
          </Item>
        ))}
      </Container>
    </Section>
  )
}
