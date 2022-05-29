import { Trans } from 'react-i18next'
import { Stroke } from 'src/components/Stroke/Stroke'
import { Heading } from 'src/components/Typography'
import { theme } from 'src/theme'
import styled from 'styled-components'
import { Section, SectionProps } from '../../components/Section'

const Container = styled(Section)`
  padding: ${theme.layout.spacing.xs} ${theme.layout.spacing.m} ${theme.layout.spacing.m};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.layout.spacing.xs};

  @media (max-width: ${theme.responsive.mobile}) {
    padding: ${theme.layout.spacing.xs};
  }
`

const Items = styled.div`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  justify-content: center;
`

const Item = styled.img`
  box-sizing: border-box;
  display: block;
  padding: ${theme.spacing.s};
  width: 150px;
  height: 90px;
  object-fit: contain;
  border: 1px solid ${theme.colors.gray[3]};
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.s};
  
  transition: filter 0.2s, box-shadow 0.2s;
  ${theme.shadow[0]}
  filter: grayscale(1);
  &:hover {
    ${theme.shadow[1]}
    filter: grayscale(0);
  }

  @media (max-width: ${theme.responsive.mobile}) {
    width: 120px;
    height: 72px;
  }
`

type Props = SectionProps & {
  partners: {
    image: string;
    title: string;
  }[]
}

export const PartnersSection = ({ partners, ...props }: Props) => {
  return (
    <Container>
        <Heading>
          <Trans>
            Our <Stroke>partners</Stroke>
          </Trans>
        </Heading>
        <Items>
          {partners.map(({ image, title }, i) => (
            <Item key={i} src={image} alt={title} title={title} />
          ))}
        </Items>
    </Container>
  )
}
