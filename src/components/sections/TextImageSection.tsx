import styled from 'styled-components'
import { Col, Row } from '../Grid'
import { Rhytm } from '../Rhytm'
import { Section, SectionProps } from '../Section'
import { Heading, Text } from '../Typography'

const Image = styled.img`
  display: block;
  width: 100%;
`

type Props = SectionProps & {
  title: string;
  text: string;
  imageUrl: string;
  imageAlt: string;
}

export const TextImageSection = ({ title, text, imageUrl, imageAlt, ...props }: Props) => {
  return (
    <Section size="wide" {...props}>
      <Row>
        <Col size={6}>
          <Rhytm>
            <Heading>
              {title}
            </Heading>
            <Text>
              {text}
            </Text>
          </Rhytm>
        </Col>
        <Col size={6}>
          <Image src={imageUrl} alt={imageAlt} />
        </Col>
      </Row>
    </Section>
  )
}
