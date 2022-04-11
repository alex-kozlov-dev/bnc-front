import { createApi } from 'src/api'
import { withLayout } from 'src/components/PageLayout'
import { createStaticPaths, getSharedData, GetStaticProps } from 'src/nextHelpers'
import { Project, ProjectProps } from 'src/pages/Project'

type Params = {
  slug: string;
}

export const getStaticProps: GetStaticProps<ProjectProps, Params> = async (ctx) => {
  const api = createApi(ctx)

  const response = await api.post(ctx.params.slug).catch(() => null)

  if (!response) {
    return {
      notFound: true
    }
  }

  return ({
    props: {
      ...(await getSharedData(ctx)),
      post: response.post,
      otherPosts: response.other_posts
    }
  })
}

export const getStaticPaths = createStaticPaths<Params>(async () => {
  const api = createApi()

  const posts = await api.posts()

  return {
    paths: posts.map(({ slug }) => ({ params: { slug } })),
    fallback: false
  }
})

export default withLayout(Project)
