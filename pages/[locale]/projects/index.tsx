import { mock } from 'mock/mock'
import { withLayout } from 'src/components/PageLayout'
import { createStaticPaths, getSharedData, GetStaticProps } from 'src/nextHelpers'
import { ProjectsList } from 'src/pages/ProjectsList'
import { ProjectListProps } from 'src/pages/ProjectsList/ProjectsList'

export const getStaticProps: GetStaticProps<ProjectListProps> = async (ctx) => ({
  props: {
    ...(await getSharedData(ctx)),
    items: mock[ctx.params.locale].projects.items
  }
})

export const getStaticPaths = createStaticPaths(() => ({
  paths: [],
  fallback: false
}))

export default withLayout(ProjectsList)
