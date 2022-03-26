import { Rhytm } from '../Rhytm'
import { Section, SectionProps } from '../Section'
import { Heading, Text } from '../Typography'

type Props = SectionProps & {
  title: string;
  text: string;
};

export const TextSection = ({ title, text, ...props }: Props) => {
  return (
    <Section size="narrow" {...props}>
      <Rhytm>
        <Heading>{title}</Heading>
        <Text>{text}</Text>
      </Rhytm>
    </Section>
  )
}
