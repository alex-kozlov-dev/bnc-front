import { mock } from 'mock/mock'
import { SSRConfig } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

type GetStaticPropsCtx<Query = {}> = {
  params: Query
  locale: string;
}

type MaybeAsync<Fn extends (...args: any) => any> = Fn | ((...args: Parameters<Fn>) => Promise<ReturnType<Fn>>)

export type MetaProps = {
  meta: {
    footer: {
      text: string;
    }
  }
}

export type SharedData = SSRConfig & MetaProps

export type GetStaticProps<Props = {}, Query = {}> = MaybeAsync<(ctx: GetStaticPropsCtx<Query>) => { props?: Props & SharedData; notFound?: true }>

export const getSharedData = async (locale: string): Promise<SharedData> => {
  const [ssrConfig, meta] = await Promise.all([
    serverSideTranslations(locale),
    Promise.resolve({ footer: mock[locale].footer })
  ])

  return {
    ...ssrConfig,
    meta
  }
}

export const getTranslatedPaths = <T extends { params: any }>(paths: T[]) => ['en', 'uk'].flatMap(locale => paths.map(path => ({ ...path, locale })))
