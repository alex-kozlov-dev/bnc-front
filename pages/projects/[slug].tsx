import { mock } from 'mock/mock'
import { GetStaticPaths } from 'next'
import { getSharedData, GetStaticProps, getTranslatedPaths } from 'src/nextHelpers'
import { Project, ProjectProps } from 'src/pages/Project'

type Params = {
  slug: string;
}

export const getStaticProps: GetStaticProps<ProjectProps, Params> = async ({ locale }) => ({
  props: {
    ...(await getSharedData(locale)),
    ...mock[locale].project
  }
})

export const getStaticPaths: GetStaticPaths<Params> = () => ({
  paths: getTranslatedPaths([
    { params: { slug: 'ololo' } }
  ]),
  fallback: false
})

export default Project
