import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { PostShort } from 'src/api/types'
import { AspectRatioImage } from 'src/components/AspectRatioImage'
import { Col, Row } from 'src/components/Grid'
import { PageTitle } from 'src/components/PageTitle'
import { DeprecatedSection } from 'src/components/Section'
import { Text } from 'src/components/Typography'
import { theme } from 'src/theme'
import styled from 'styled-components'

const Img = styled(AspectRatioImage)`
  margin-bottom: 0.8em;
`

const ItemLink = styled.a`
  ${theme.reset.link}
  display: block;
  text-align: center;

  ${Img} {
    transition: box-shadow 0.2s;
    overflow: hidden;
    ${theme.shadow[0]}
    img {
      transition: transform 0.2s;
      transform: scale(1);
    }
  }

  &:hover ${Img} {
    ${theme.shadow[3]}
    img {
      transform: scale(1.1);
    }
  }
`

export type ProjectListProps = {
  items: PostShort[]
}

export const ProjectsList = ({ items }: ProjectListProps) => {
  const { t } = useTranslation()

  return (
    <>
      <PageTitle title={t('Our work')} />
      <DeprecatedSection title={t('Our work')} size="wide">
        <Row gap='xxl'>
          {items.map(({ title, main_image_thumb, slug }, i) => (
            <Col size={4} key={i}>
              <Link href={`/our-work/${slug}`} passHref>
                <ItemLink>
                  <Img src={main_image_thumb} alt={title} aspectRatio={16 / 9}/>
                  <Text typography={theme.typography.head['1.5'].regular}>{title}</Text>
                </ItemLink>
              </Link>
            </Col>
          ))}
        </Row>
      </DeprecatedSection>
    </>
  )
}
