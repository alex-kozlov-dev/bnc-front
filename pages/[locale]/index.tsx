import { Home, HomeProps } from 'src/pages/Home'
import { createStaticPaths, getSharedData, GetStaticProps } from 'src/nextHelpers'
import { mock } from 'mock/mock'

export const getStaticProps: GetStaticProps<HomeProps> = async (ctx) => ({
  props: {
    ...(await getSharedData(ctx)),
    splash: mock[ctx.params.locale].home.splash,
    iconTextList: mock[ctx.params.locale].home.iconTextList,
    textImage: mock[ctx.params.locale].home.textImage,
    text: mock[ctx.params.locale].home.text,
    numberedList: mock[ctx.params.locale].home.numberedList,
    donateCta: mock[ctx.params.locale].home.donateCTA,
    partners: mock[ctx.params.locale].home.partners,
    qa: mock[ctx.params.locale].home.qa
  }
})

export const getStaticPaths = createStaticPaths(() => ({
  paths: [],
  fallback: false
}))

export default Home
