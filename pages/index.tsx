import { Home, HomeProps } from 'src/pages/Home'
import { getSharedData, GetStaticProps } from 'src/nextHelpers'
import { mock } from 'mock/mock'
import { withLayout } from 'src/components/PageLayout'

export const getStaticProps: GetStaticProps<HomeProps> = async (ctx) => ({
  props: {
    ...(await getSharedData(ctx)),
    splash: mock[ctx.locale].home.splash,
    iconTextList: mock[ctx.locale].home.iconTextList,
    textImage: mock[ctx.locale].home.textImage,
    text: mock[ctx.locale].home.text,
    numberedList: mock[ctx.locale].home.numberedList,
    donateCta: mock[ctx.locale].home.donateCTA,
    partners: mock[ctx.locale].home.partners,
    qa: mock[ctx.locale].home.qa
  }
})

export default withLayout(Home)
