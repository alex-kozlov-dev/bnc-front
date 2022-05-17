import { useTranslation } from 'react-i18next'
import { createApi } from 'src/api'
import { withLayout } from 'src/components/PageLayout'
import { PageTitle } from 'src/components/PageTitle'
import { DeprecatedSection } from 'src/components/Section'
import { Wysiwyg } from 'src/components/Wysiwyg'
import { getSharedData, GetStaticProps } from 'src/nextHelpers'

type Props = {
  text: string;
}

export const getStaticProps: GetStaticProps<Props> = async ctx => {
  const api = createApi(ctx)

  const [shared, legal] = await Promise.all([getSharedData(ctx), api.legal()])

  return {
    props: {
      ...shared,
      text: legal.privacy_policy || ''
    }
  }
}

const PrivacyPolicy = ({ text }: Props) => {
  const { t } = useTranslation()
  return (
    <>
      <PageTitle title={t('Privacy Policy')} />
      <DeprecatedSection size="narrow" title={t('Privacy Policy')}>
        <Wysiwyg content={text} />
      </DeprecatedSection>
    </>
  )
}

export default withLayout(PrivacyPolicy)
