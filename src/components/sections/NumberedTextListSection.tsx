import { t } from 'src/theme'
import styled from 'styled-components'
import { Section, SectionProps } from '../Section'
import { Text } from '../Typography'

const Container = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: ${t.spacing.m};
`

const Item = styled.div<{ number: number }>`
  position: relative;
  border: 1px solid ${t.colors.gray[3]};
  padding: ${t.spacing.l};
  border-radius: ${t.borderRadius.m};
  background: white;

  &:before {
    display: block;
    content: '${({ number }) => number}';
    ${t.typography.head[5].regular}
    line-height: 0.7;
    color: ${t.colors.gray[2]};

    position: absolute;
    top: 0;
    left: 0;
    margin: ${t.spacing.s};
    z-index: 1;
  }
`

const ItemText = styled(Text)`
  position: relative;
  z-index: 2;
`

type Props = SectionProps & {
  items: {
    text: string;
  }[]
}

export const NumberedTextListSection = ({ items, ...props }: Props) => {
  return (
    <Section size="wide" {...props} >
      <Container>
        {items.map(({ text }, i) => (
          <Item key={i} number={i + 1}>
            <ItemText>{text}</ItemText>
          </Item>
        ))}
      </Container>
    </Section>
  )
}