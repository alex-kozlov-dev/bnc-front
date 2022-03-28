import { mock } from 'mock/mock'
import { SSRConfig } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { LayoutProps } from './components/PageLayout/PageLayout'

type GetStaticPropsCtx<Query = {}> = {
  params: Query & {
    locale: string;
  }
}

type MaybeAsync<Fn extends (...args: any) => any> = Fn | ((...args: Parameters<Fn>) => Promise<ReturnType<Fn>>)

export type SharedData = SSRConfig & { layout: LayoutProps }

export type GetStaticProps<Props = {}, Query = {}> = MaybeAsync<(ctx: GetStaticPropsCtx<Query>) => { props?: Props & SharedData; notFound?: true }>

export const getSharedData = async <T extends GetStaticPropsCtx<any>>(ctx: T): Promise<SharedData> => {
  const [ssrConfig, layout] = await Promise.all([
    serverSideTranslations(ctx.params.locale),
    Promise.resolve({ footer: mock[ctx.params.locale].footer })
  ])

  return {
    ...ssrConfig,
    layout
  }
}

type GetStaticPathsResults<Q = {}> = {
  paths: { params: Q }[],
  fallback: boolean
}

export type CommonParams = {
  locale: string;
}

export const createStaticPaths = <Q = {}>(fn: MaybeAsync<() => GetStaticPathsResults<Q>>) => async () => {
  const getStaticPathsResult = await fn()

  if (!getStaticPathsResult.paths.length) {
    return {
      ...getStaticPathsResult,
      paths: [{ params: { locale: 'uk' } }, { params: { locale: 'en' } }]
    }
  }

  return {
    ...getStaticPathsResult,
    paths: ['uk', 'en'].flatMap(locale => getStaticPathsResult.paths.map(path => ({ ...path, params: { ...path.params, locale } })))
  }
}
