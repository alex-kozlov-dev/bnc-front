import { FC } from 'react'
import { t } from 'src/theme'
import styled from 'styled-components'
import { Content, ContentSize } from './Content'
import { Heading } from './Typography'

type Variant = 'white' | 'gray' | 'black';

const Container = styled.section<{ variant: Variant }>`
  background-color: ${({ variant }) => variant === 'black' ? t.colors.gray[8] : variant === 'gray' ? t.colors.gray[0] : 'unset'};
  color: ${({ variant }) => variant === 'black' ? t.colors.white : 'unset'};
  padding: ${t.spacing.m} 0;
`

const Title = styled(Heading)`
  margin-bottom: 1rem;
`

export type SectionProps = {
  title?: string;
  variant?: Variant;
  size?: ContentSize;
}

export const Section: FC<SectionProps> = ({ variant = 'white', size = 'narrow', title, children }) => {
  return (
    <Container variant={variant}>
      {title && <Title align="center">{title}</Title>}
      <Content size={size}>
        {children}
      </Content>
    </Container>
  )
}
