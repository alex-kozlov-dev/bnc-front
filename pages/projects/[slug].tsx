import { lorem } from 'mock/lorem'
import { GetStaticPaths } from 'next'
import { Project, ProjectProps } from 'src/pages/Project'
import { GetStaticProps } from 'src/types'

type Params = {
  slug: string;
}

export const getStaticProps: GetStaticProps<ProjectProps> = () => {
  return {
    props: {
      imageUrl: 'https://www.fillmurray.com/1400/302',
      title: lorem(3),
      text: lorem()
    }
  }
}

export const getStaticPaths: GetStaticPaths<Params> = () => {
  return {
    paths: [
      { params: { slug: 'ololo' } }
    ],
    fallback: false
  }
}

export default Project
