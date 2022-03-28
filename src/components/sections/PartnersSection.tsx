import { theme } from 'src/theme'
import styled from 'styled-components'
import { Rhytm } from '../Rhytm'
import { Section, SectionProps } from '../Section'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.m};
`

const Item = styled.img`
  box-sizing: border-box;
  display: block;
  padding: ${theme.spacing.s};
  width: 120px;
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
`

type Props = SectionProps & {
  partners: {
    imageUrl: string;
    alt: string;
  }[]
}

export const PartnersSection = ({ partners, ...props }: Props) => {
  return (
    <Section size="wide" title="Our partners" {...props}>
      <Rhytm margin={3}>
        <Container>
          {partners.map(({ imageUrl, alt }, i) => (
            <Item key={i} src={imageUrl} alt={alt} title={alt} />
          ))}
        </Container>
      </Rhytm>
    </Section>
  )
}
