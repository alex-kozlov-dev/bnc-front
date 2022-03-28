import { mock } from 'mock/mock'
import { withLayout } from 'src/components/PageLayout'
import { createStaticPaths, getSharedData, GetStaticProps } from 'src/nextHelpers'
import { Project, ProjectProps } from 'src/pages/Project'

type Params = {
  slug: string;
}

export const getStaticProps: GetStaticProps<ProjectProps, Params> = async (ctx) => ({
  props: {
    ...(await getSharedData(ctx)),
    ...mock[ctx.params.locale].project
  }
})

export const getStaticPaths = createStaticPaths<Params>(() => ({
  paths: [
    { params: { slug: 'ololo' } }
  ],
  fallback: false
}))

export default withLayout(Project)
