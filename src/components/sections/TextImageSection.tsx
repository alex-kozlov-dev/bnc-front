import { TextImagePageSection } from 'src/api/types'
import { theme } from 'src/theme'
import styled from 'styled-components'
import { Col, Row } from '../Grid'
import { Section, SectionProps } from '../Section'
import { Wysiwyg } from '../Wysiwyg'

const Image = styled.img`
  display: block;
  width: 100%;
  border-radius: ${theme.borderRadius.s};
`

const RowS = styled(Row)<{ reverse?: boolean }>`
  flex-direction: ${({ reverse }) => reverse ? 'row-reverse' : 'row'};
`

type Props = SectionProps & {
  data: TextImagePageSection;
};

export const TextImageSection = ({ data, ...props }: Props) => {
  const { title, text, image, image_on_the_left } = data

  return (
    <Section size="wide" {...props} title={title}>
      <RowS reverse={image_on_the_left}>
        <Col size={6}>
          <Wysiwyg content={text} />
        </Col>
        <Col size={6}>
          <Image src={image} alt={title} />
        </Col>
      </RowS>
    </Section>
  )
}
