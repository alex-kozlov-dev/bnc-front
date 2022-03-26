import { t } from 'src/theme'
import styled from 'styled-components'
import { Rhytm } from '../Rhytm'
import { Section, SectionProps } from '../Section'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: ${t.spacing.m};
`

const Item = styled.img`
  box-sizing: border-box;
  display: block;
  padding: ${t.spacing.s};
  width: 120px;
  height: 90px;
  object-fit: contain;
  border: 1px solid ${t.colors.gray[3]};
  background-color: ${t.colors.white};
  
  transition: filter 0.2s, box-shadow 0.2s;
  ${t.shadow[0]}
  filter: grayscale(1);
  &:hover {
    ${t.shadow[1]}
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
