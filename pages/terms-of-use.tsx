import { useTranslation } from 'react-i18next'
import { createApi } from 'src/api'
import { withLayout } from 'src/components/PageLayout'
import { Section } from 'src/components/Section'
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
      text: legal.terms_of_use || ''
    }
  }
}

const TermsOfUse = ({ text }: Props) => {
  const { t } = useTranslation()

  return (
    <Section size="narrow" title={t('Terms of use')}>
      <Wysiwyg content={text} />
    </Section>
  )
}

export default withLayout(TermsOfUse)
