import { PostFull, PostShort } from 'src/api/types'
import { Col, Row } from 'src/components/Grid'
import { PageTitle } from 'src/components/PageTitle'
import { Rhytm } from 'src/components/Rhytm'
import { DeprecatedSection } from 'src/components/Section'
import { Wysiwyg } from 'src/components/Wysiwyg'
import { OtherProject } from './OtherProject'
import { PostImages } from './PostImages'

export type ProjectProps = {
  post: PostFull;
  otherPosts: PostShort[];
}

export const Project = ({ post, otherPosts }: ProjectProps) => {
  return (
    <>
      <PageTitle title={post.title} />
      <DeprecatedSection title={post.title} size="wide">
        <Row gap="xl">
          <Col size={{ desktop: 9, mobile: 12 }}>
            <Rhytm>
              <PostImages post={post} />
              <Wysiwyg content={post.text} />
            </Rhytm>
          </Col>
          <Col size={3} hide={{ mobile: true }}>
            <Rhytm>
              {otherPosts.map((project, i) => (
                <OtherProject key={i} {...project} />
              ))}
            </Rhytm>
          </Col>
        </Row>
      </DeprecatedSection>
    </>
  )
}
