import { useTranslation } from 'react-i18next'
import { AspectRatioImage } from 'src/components/AspectRatioImage'
import { Col, Row } from 'src/components/Grid'
import { Link } from 'src/components/Link'
import { Rhytm } from 'src/components/Rhytm'
import { Section } from 'src/components/Section'
import { Heading, Text } from 'src/components/Typography'
import { theme } from 'src/theme'
import styled from 'styled-components'

const ItemLink = styled.a`
  ${theme.reset.link}
  display: block;
  background: white;
  position: relative;
  transition: box-shadow 0.2s;
  border: 1px solid ${theme.colors.gray[1]};
  border-radius: ${theme.borderRadius.s};
  overflow: hidden;
  ${theme.shadow[0]}
  &:hover {
    ${theme.shadow[1]}
  }
`

const ItemContent = styled.div`
  padding: ${theme.spacing.l};
`

export type ProjectListProps = {
  items: {
    imageUrl: string;
    title: string;
    summary: string;
    slug: string;
  }[]
}

export const ProjectsList = ({ items }: ProjectListProps) => {
  const { t } = useTranslation()

  return (
    <Section title={t('Projects')} size="wide">
      <Row>
        {items.map(({ imageUrl, title, summary, slug }, i) => (
          <Col size={6} key={i}>
            <Link href={`/projects/${slug}`} passHref>
              <ItemLink>
                <AspectRatioImage src={imageUrl} alt={title} aspectRatio={16 / 9}/>
                <ItemContent>
                  <Rhytm>
                    <Heading>{title}</Heading>
                    <Text>{summary}</Text>
                  </Rhytm>
                </ItemContent>
              </ItemLink>
            </Link>
          </Col>
        ))}
      </Row>
    </Section>
  )
}
