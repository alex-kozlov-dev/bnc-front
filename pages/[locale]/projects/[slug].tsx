import { mock } from 'mock/mock'
import { withLayout } from 'src/components/PageLayout'
import { createStaticPaths, getSharedData, GetStaticProps } from 'src/nextHelpers'
import { Project, ProjectProps } from 'src/pages/Project'

type Params = {
  slug: string;
}

export const getStaticProps: GetStaticProps<ProjectProps, Params> = async (ctx) => {
  const projects = mock[ctx.params.locale].projects.items

  const project = projects.find(({ slug }) => slug === ctx.params.slug)

  if (!project) {
    return {
      notFound: true
    }
  }

  const otherProjects = projects.filter(({ slug }) => slug !== ctx.params.slug).slice(0, 3)

  return ({
    props: {
      ...(await getSharedData(ctx)),
      project,
      otherProjects
    }
  })
}

export const getStaticPaths = createStaticPaths<Params>(() => ({
  paths: mock.en.projects.items.map(({ slug }) => ({ params: { slug } })),
  fallback: false
}))

export default withLayout(Project)
