import { mock } from 'mock/mock'
import { getSharedData, GetStaticProps } from 'src/nextHelpers'
import { ProjectsList } from 'src/pages/ProjectsList'
import { ProjectListProps } from 'src/pages/ProjectsList/ProjectsList'

export const getStaticProps: GetStaticProps<ProjectListProps> = async ({ locale }) => ({
  props: {
    ...(await getSharedData(locale)),
    items: mock[locale].projects.items
  }
})

export default ProjectsList
