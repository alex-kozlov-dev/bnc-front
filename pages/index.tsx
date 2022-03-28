import { Home, HomeProps } from 'src/pages/Home'
import { getSharedData, GetStaticProps } from 'src/nextHelpers'
import { mock } from 'mock/mock'

export const getStaticProps: GetStaticProps<HomeProps> = async ({ locale }) => ({
  props: {
    ...(await getSharedData(locale)),
    splash: mock[locale].home.splash,
    iconTextList: mock[locale].home.iconTextList,
    textImage: mock[locale].home.textImage,
    text: mock[locale].home.text,
    numberedList: mock[locale].home.numberedList,
    donateCta: mock[locale].home.donateCTA,
    partners: mock[locale].home.partners,
    qa: mock[locale].home.qa
  }
})

export default Home
