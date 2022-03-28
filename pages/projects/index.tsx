import { lorem } from 'mock/lorem'
import { ProjectsList } from 'src/pages/ProjectsList'
import { ProjectListProps } from 'src/pages/ProjectsList/ProjectsList'
import { GetStaticProps } from 'src/types'

export const getStaticProps: GetStaticProps<ProjectListProps> = () => {
  return {
    props: {
      items: [
        {
          title: lorem(4),
          imageUrl: 'https://www.fillmurray.com/500/500',
          slug: 'ololo'
        },
        {
          title: lorem(4),
          imageUrl: 'https://www.fillmurray.com/500/501',
          slug: 'ololo'
        },
        {
          title: lorem(4),
          imageUrl: 'https://www.fillmurray.com/500/502',
          slug: 'ololo'
        },
        {
          title: lorem(4),
          imageUrl: 'https://www.fillmurray.com/500/502',
          slug: 'ololo'
        }
      ]
    }
  }
}

export default ProjectsList
