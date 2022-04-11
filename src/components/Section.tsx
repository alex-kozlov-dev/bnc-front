import { FC } from 'react'
import { theme } from 'src/theme'
import styled from 'styled-components'
import { Content, ContentSize } from './Content'
import { Heading } from './Typography'

type Variant = 'white' | 'gray' | 'black';

const Container = styled.section<{ variant: Variant }>`
  background-color: ${({ variant }) => variant === 'black' ? theme.colors.gray[8] : variant === 'gray' ? theme.colors.gray[0] : 'unset'};
  color: ${({ variant }) => variant === 'black' ? theme.colors.white : 'unset'};
  padding: ${theme.spacing.m} 0;
`

const Title = styled(Heading)`
  & {
    margin-bottom: 1rem;
  }
`

export type SectionProps = {
  title?: string;
  variant?: Variant;
  size?: ContentSize;
  className?: string;
}

export const alternateVariant = (n: number) => n % 2 ? 'gray' : 'white'

export const Section: FC<SectionProps> = ({ variant = 'white', size = 'narrow', title, className, children }) => {
  return (
    <Container variant={variant} className={className}>
      {title && <Title align="center">{title}</Title>}
      <Content size={size}>
        {children}
      </Content>
    </Container>
  )
}
