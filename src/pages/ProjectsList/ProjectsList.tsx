import Link from 'next/link'
import { Section } from 'src/components/Section'
import { Text } from 'src/components/Typography'
import { t } from 'src/theme'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  gap: ${t.spacing.l};
  justify-content: center;
`

const Item = styled.a<{ imageUrl: string }>`
  ${t.reset.link}
  display: block;
  background: white;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  min-height: 300px;
  width: 300px;
  position: relative;
  transition: box-shadow 0.2s;
  ${t.shadow[0]}
  &:hover {
    ${t.shadow[3]}
  }
`

const TitleContainer = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding: ${t.spacing.s};
  color: white;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`

export type ProjectListProps = {
  items: {
    imageUrl: string;
    title: string;
    slug: string;
  }[]
}

export const ProjectsList = ({ items }: ProjectListProps) => {
  return (
    <Section title="Projects" size="full-width">
      <Container>
        {items.map(({ imageUrl, title, slug }, i) => (
          <Link href={`/projects/${slug}`} passHref key={i}>
            <Item imageUrl={imageUrl}>
              <TitleContainer>
                <Text typography={t.typography.head['1.5'].regular}>{title}</Text>
              </TitleContainer>
            </Item>
          </Link>
        ))}
      </Container>
    </Section>
  )
}
