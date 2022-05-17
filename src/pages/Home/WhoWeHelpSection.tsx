import { Trans } from 'react-i18next'
import { Section } from 'src/components/Section'
import { Stroke } from 'src/components/Stroke/Stroke'
import { Heading } from 'src/components/Typography'
import { theme } from 'src/theme'
import styled from 'styled-components'

const Container = styled(Section)`
  padding: ${theme.layout.spacing.xs} ${theme.layout.spacing.m} ${theme.layout.spacing.m};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.layout.spacing.xs};
`

const Items = styled.div`
  max-width: 1024px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
`

const Item = styled.div`
  border: 1px solid ${theme.colors.gray[8]};
  padding: 8px 16px;
  border-radius: 19px;
`

type Props = {
  items: {
    text: string
  }[];
}

export const WhoWeHelpSection = ({ items }: Props) => {
  return (
    <Container variant="gray">
      <Heading>
        <Trans>
          <Stroke>Who</Stroke> we are helping?
        </Trans>
      </Heading>
      <Items>
        {items.map(({ text }, i) => <Item key={i}>{text}</Item>)}
      </Items>
    </Container>
  )
}
