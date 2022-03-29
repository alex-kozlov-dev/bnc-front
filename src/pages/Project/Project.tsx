import { useTranslation } from 'react-i18next'
import { AspectRatioImage } from 'src/components/AspectRatioImage'
import { Col, Row } from 'src/components/Grid'
import { Rhytm } from 'src/components/Rhytm'
import { Section } from 'src/components/Section'
import { Heading, Text } from 'src/components/Typography'
import { theme } from 'src/theme'
import { OtherProject } from './OtherProject'

export type ProjectProps = {
  project: {
    imageUrl: string;
    title: string;
    text: string;
  }
  otherProjects: {
    imageUrl: string;
    title: string;
    slug: string;
  }[]
}

export const Project = ({ project, otherProjects }: ProjectProps) => {
  const { t } = useTranslation()

  return (
    <>
      <Section title={project.title} size="wide">
        <Row gap="xl">
          <Col size={9}>
            <Rhytm>
              <AspectRatioImage src={project.imageUrl} alt={project.title} aspectRatio={16 / 9}/>
            <Text>{project.text}</Text>
            </Rhytm>
          </Col>
          <Col size={3}>
            <Rhytm>
              <Heading typography={theme.typography.head['1.5'].regular}>
                {t('Other projects')}
              </Heading>
              {otherProjects.map((project, i) => (
                <OtherProject key={i} {...project} />
              ))}
            </Rhytm>
          </Col>
        </Row>
      </Section>
      <Section variant='gray' title={t('Donate to projet')}>
        TMP
      </Section>
    </>
  )
}
