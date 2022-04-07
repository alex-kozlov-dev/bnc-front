import { Home, HomeProps } from 'src/pages/Home'
import { getSharedData, GetStaticProps } from 'src/nextHelpers'
import { withLayout } from 'src/components/PageLayout'
import { createApi } from 'src/api'

export const getStaticProps: GetStaticProps<HomeProps> = async (ctx) => {
  const api = createApi(ctx)

  const [sharedData, data] = await Promise.all([
    getSharedData(ctx),
    api.homepage()
  ])

  return ({
    props: {
      ...sharedData,
      data
    }
  })
}

export default withLayout(Home)
