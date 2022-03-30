import Link from 'next/link'
import { AspectRatioImage } from 'src/components/AspectRatioImage'
import { Rhytm } from 'src/components/Rhytm'
import { Text } from 'src/components/Typography'
import { theme } from 'src/theme'
import styled from 'styled-components'

const ProjectImage = styled(AspectRatioImage)`
  transition: box-shadow 0.2s;
  ${theme.shadow[0]}
`

const ProjectLink = styled.a`
  ${theme.reset.link}
  display: block;

  &:hover ${ProjectImage} {
    ${theme.shadow[3]}
  }
`

export type OtherProjectProps = {
  title: string;
  imageUrl: string;
  slug: string;
}

export const OtherProject = ({ title, imageUrl, slug }: OtherProjectProps) => {
  return (
    <Link href={`/projects/${slug}`} passHref>
      <ProjectLink>
        <Rhytm margin={0.5}>
          <ProjectImage src={imageUrl} alt={title} aspectRatio={16 / 9} />
          <Text typography={theme.typography.text[1].bold} align="center">{title}</Text>
        </Rhytm>
      </ProjectLink>
    </Link>
  )
}
