import { TextPageSection } from 'src/api/types'
import { Rhytm } from '../Rhytm'
import { Section, SectionProps } from '../Section'
import { Heading, Text } from '../Typography'

type Props = SectionProps & {
  data: TextPageSection;
};

export const TextSection = ({ data, ...props }: Props) => {
  const { title, text } = data

  return (
    <Section size="narrow" {...props}>
      <Rhytm>
        <Heading>{title}</Heading>
        <Text>{text}</Text>
      </Rhytm>
    </Section>
  )
}
