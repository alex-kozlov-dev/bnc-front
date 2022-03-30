import { mock } from 'mock/mock'
import { withLayout } from 'src/components/PageLayout'
import { getSharedData, GetStaticProps } from 'src/nextHelpers'
import { ProjectsList } from 'src/pages/ProjectsList'
import { ProjectListProps } from 'src/pages/ProjectsList/ProjectsList'

export const getStaticProps: GetStaticProps<ProjectListProps> = async (ctx) => ({
  props: {
    ...(await getSharedData(ctx)),
    items: mock[ctx.locale].projects.items
  }
})

export default withLayout(ProjectsList)
