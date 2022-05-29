import { ComponentProps, ReactNode } from 'react'
import { Section } from 'src/components/Section'
import { Heading } from 'src/components/Typography'
import { theme } from 'src/theme'
import styled from 'styled-components'
import { Item } from './Item'

const Container = styled(Section)`
  padding: ${theme.layout.spacing.xs} ${theme.layout.spacing.m} ${theme.layout.spacing.m};
  
  @media (max-width: ${theme.responsive.mobile}) {
    padding: ${theme.layout.spacing.xs};
  }
`

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.layout.spacing.xs};
  align-items: center;
`

const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 1260px;
  align-items: center;
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  box-sizing: border-box;
  padding: 0 ${theme.layout.spacing.m};
  width: 50%;
  min-width: 550px;
  @media (max-width: ${theme.responsive.tablet}) {
    width: 100%;
  }

  @media (max-width: ${theme.responsive.mobile}) {
    padding: 0;
    min-width: unset;
  }
`

const Right = styled.div`
  max-width: 50%;
  @media (max-width: ${theme.responsive.tablet}) {
    display: none;
  }
`

const Image = styled.img`
  display: block;
  mask-image: url(${require('../../../img/mask.svg').default.src});
  width: 100%;
`

type Props = {
  title: ReactNode;
  imageUrl: string;
  items: {
    icon: string;
    title: string;
    text: string;
  }[];
  variant?: ComponentProps<typeof Section>['variant'];
  reversed?: boolean;
}

export const IconItemsImageSection = ({ variant, title, imageUrl, items, reversed }: Props) => {
  return (
    <Container variant={variant}>
      <Inner>
        <Heading>{title}</Heading>
        <Content style={{ flexDirection: reversed ? 'row-reverse' : undefined }}>
          <Left>
            {items.map(({ icon, title, text }, i) => (
              <Item
                key={i}
                icon={icon}
                title={title}
                text={text}
              />
            ))}
          </Left>
          <Right>
            <Image src={imageUrl} />
          </Right>
        </Content>
      </Inner>
    </Container>
  )
}
