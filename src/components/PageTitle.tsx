import Head from 'next/head'
import { useMeta } from './PageLayout/MetaProvider'

type Props = {
  title?: string;
}

export const PageTitle = ({ title: pageTitle }: Props) => {
  const { title } = useMeta()
  return (
    <Head>
      <title>{pageTitle ? `${pageTitle} | ${title}` : title}</title>
    </Head>
  )
}
