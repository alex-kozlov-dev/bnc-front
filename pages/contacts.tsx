import { withLayout } from 'src/components/PageLayout'
import { getSharedData, GetStaticProps } from 'src/nextHelpers'
import { ContactsPage, ContactsPageProps } from 'src/pages/Contacts'

export const getStaticProps: GetStaticProps<ContactsPageProps> = async (ctx) => {
  return {
    props: await getSharedData(ctx)
  }
}

export default withLayout(ContactsPage)
