import { TextImagePageSection } from 'src/api/types'
import { theme } from 'src/theme'
import styled from 'styled-components'
import { Col, Row } from '../Grid'
import { Rhytm } from '../Rhytm'
import { Section, SectionProps } from '../Section'
import { Heading } from '../Typography'
import { Wysiwyg } from '../Wysiwyg'

const Image = styled.img`
  display: block;
  width: 100%;
  border-radius: ${theme.borderRadius.s};
`

type Props = SectionProps & {
  data: TextImagePageSection;
};

export const TextImageSection = ({ data, ...props }: Props) => {
  const { title, text, image } = data

  return (
    <Section size="wide" {...props}>
      <Row>
        <Col size={6}>
          <Rhytm>
            <Heading>
              {title}
            </Heading>
            <Wysiwyg content={text} />
          </Rhytm>
        </Col>
        <Col size={6}>
          <Image src={image} alt={title} />
        </Col>
      </Row>
    </Section>
  )
}
