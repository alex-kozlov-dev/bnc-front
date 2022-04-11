import { createApi } from 'src/api'
import { withLayout } from 'src/components/PageLayout'
import { getSharedData, GetStaticProps } from 'src/nextHelpers'
import { DonatePage, DonatePageProps } from 'src/pages/Donate'

export const getStaticProps: GetStaticProps<DonatePageProps> = async (ctx) => {
  const api = createApi(ctx)

  const [shared, payment] = await Promise.all([
    getSharedData(ctx),
    api.payment()
  ])

  return {
    props: {
      ...shared,
      payment
    }
  }
}

export default withLayout(DonatePage)
