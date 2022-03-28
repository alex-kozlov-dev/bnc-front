import { useState } from 'react'
import { t } from 'src/theme'
import styled from 'styled-components'
import { Icon } from '../Icon'
import { Rhytm } from '../Rhytm'
import { Section, SectionProps } from '../Section'
import { Text } from '../Typography'

const ItemContainer = styled.div`
  padding: ${t.spacing.l};
  border: 1px solid ${t.colors.gray[3]};
  background: ${t.colors.white};
  cursor: pointer;
  transition: box-shadow 0.2s;
  border-radius: ${t.borderRadius.m};
  ${t.shadow[0]}
  &:hover {
    ${t.shadow[1]}
  }
`

const Question = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Answer = styled.div<{ open?: boolean }>`
  overflow: hidden;
  transition: max-height 0.2s;
  max-height: ${({ open }) => open ? '800px' : '0'};

  > ${Text} {
    padding-top: 1.5em;
  }
`

type Item = {
  question: string;
  answer: string;
}

const QAItem = ({ question, answer }: Item) => {
  const [open, setOpen] = useState(false)
  return (
    <ItemContainer onClick={() => setOpen(!open)}>
      <Question>
        <Text typography={t.typography.head['1.5'].regular}>
          {question}
        </Text>
        <Icon icon="fa-chevron-right" rotate={open ? 90 : 0} />
      </Question>
      <Answer open={open}>
        <Text>
          {answer}
        </Text>
      </Answer>
    </ItemContainer>
  )
}

type Props = SectionProps & {
  items: Item[]
}

export const QASection = ({ items, ...props }: Props) => {
  return (
    <Section size="narrow" title="Q&A" {...props}>
      <Rhytm>
        {items.map((props, i) => <QAItem key={i} {...props} />)}
      </Rhytm>
    </Section>
  )
}