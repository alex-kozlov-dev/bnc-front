import { FC } from 'react'
import { theme } from 'src/theme'
import styled from 'styled-components'
import { Content, ContentSize } from './Content'
import { Heading } from './Typography'

type _Variant = 'white' | 'gray' | 'black';

type ResponsiveVariant = {
  desktop?: _Variant;
  tablet?: _Variant;
  mobile?: _Variant;
}

type Variant = _Variant | ResponsiveVariant;

const getVariant = (variant: Variant = 'white', size: keyof ResponsiveVariant) => {
  if (typeof variant === 'string') {
    return variant
  }

  const { desktop = 'white', tablet = desktop, mobile = tablet } = variant

  return { desktop, tablet, mobile }[size]
}

export const Section = styled.section<{ variant?: Variant }>`
  background-color: ${({ variant }) => getVariant(variant, 'desktop') === 'black' ? theme.colors.gray[8] : getVariant(variant, 'desktop') === 'gray' ? theme.colors.gray[0] : 'unset'};
  color: ${({ variant = 'white' }) => getVariant(variant, 'desktop') === 'black' ? theme.colors.white : 'unset'};

  @media (max-width: ${theme.responsive.tablet}) {
    background-color: ${({ variant }) => getVariant(variant, 'tablet') === 'black' ? theme.colors.gray[8] : getVariant(variant, 'tablet') === 'gray' ? theme.colors.gray[0] : 'unset'};
    color: ${({ variant = 'white' }) => getVariant(variant, 'tablet') === 'black' ? theme.colors.white : 'unset'};
  }

  @media (max-width: ${theme.responsive.mobile}) {
    background-color: ${({ variant }) => getVariant(variant, 'mobile') === 'black' ? theme.colors.gray[8] : getVariant(variant, 'mobile') === 'gray' ? theme.colors.gray[0] : 'unset'};
    color: ${({ variant = 'white' }) => getVariant(variant, 'mobile') === 'black' ? theme.colors.white : 'unset'};
  }
`

const Container = styled(Section)`
  padding: ${theme.spacing.m} 0;
`

const Title = styled(Heading)`
  & {
    margin-bottom: 1rem;
  }
`

export type SectionProps = {
  title?: string;
  variant?: _Variant;
  size?: ContentSize;
  className?: string;
}

export const alternateVariant = (n: number) => n % 2 ? 'gray' : 'white'

export const DeprecatedSection: FC<SectionProps> = ({ variant = 'white', size = 'narrow', title, className, children }) => {
  return (
    <Container variant={variant} className={className}>
      {title && <Title align="center">{title}</Title>}
      <Content size={size}>
        {children}
      </Content>
    </Container>
  )
}
