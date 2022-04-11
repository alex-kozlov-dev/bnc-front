import { TextListPageSection } from 'src/api/types'
import { theme } from 'src/theme'
import styled from 'styled-components'
import { Col, Row } from '../Grid'
import { Section, SectionProps } from '../Section'
import { Wysiwyg } from '../Wysiwyg'

const Item = styled.div<{ number: number }>`
  position: relative;
  border: 1px solid ${theme.colors.gray[3]};
  padding: ${theme.spacing.l};
  border-radius: ${theme.borderRadius.m};
  background: white;

  &:before {
    display: block;
    content: '${({ number }) => number}';
    ${theme.typography.head[5].regular}
    line-height: 0.7;
    color: ${theme.colors.gray[2]};

    position: absolute;
    top: 0;
    left: 0;
    margin: ${theme.spacing.s};
    z-index: 1;
  }
`

const ItemText = styled(Wysiwyg)`
  position: relative;
  z-index: 2;
`

type Props = SectionProps & {
  data: TextListPageSection;
}

export const NumberedTextListSection = ({ data, ...props }: Props) => {
  return (
    <Section size="wide" {...props} >
      <Row justify='center'>
        {data.text_items.map(({ id, text }, i) => (
          <Col key={id} size={3}>
            <Item number={i + 1}>
              <ItemText content={text} />
            </Item>
          </Col>
        ))}
      </Row>
    </Section>
  )
}
