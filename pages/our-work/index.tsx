import { createApi } from 'src/api'
import { withLayout } from 'src/components/PageLayout'
import { getSharedData, GetStaticProps } from 'src/nextHelpers'
import { ProjectsList } from 'src/pages/ProjectsList'
import { ProjectListProps } from 'src/pages/ProjectsList/ProjectsList'

export const getStaticProps: GetStaticProps<ProjectListProps> = async (ctx) => {
  const api = createApi(ctx)

  const [sharedData, items] = await Promise.all([
    getSharedData(ctx),
    api.posts()
  ])

  return {
    props: {
      ...sharedData,
      items
    }
  }
}

export default withLayout(ProjectsList)
