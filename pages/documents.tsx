import { createApi } from 'src/api'
import { withLayout } from 'src/components/PageLayout'
import { getSharedData, GetStaticProps } from 'src/nextHelpers'
import { DocumentsPage, DocumentsPageProps } from 'src/pages/Documents'

export const getStaticProps: GetStaticProps<DocumentsPageProps> = async ctx => {
  const api = createApi(ctx)

  const [files, shared] = await Promise.all([
    api.files(),
    getSharedData(ctx)
  ])

  return {
    props: {
      ...shared,
      files
    }
  }
}

export default withLayout(DocumentsPage)
