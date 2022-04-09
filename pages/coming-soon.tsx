import { getSharedData, GetStaticProps } from 'src/nextHelpers'
import { ComingSoon } from 'src/pages/ComingSoon/ComingSoon'

export const getStaticProps: GetStaticProps = async (ctx) => {
  const sharedData = await getSharedData(ctx)

  return ({
    props: {
      ...sharedData
    }
  })
}

export default ComingSoon
