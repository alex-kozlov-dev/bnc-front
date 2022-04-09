import { SSRConfig } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { createApi } from './api'
import { Meta } from './api/types'

export type GetStaticPropsCtx<Query = {}> = {
  params: Query;
  locale: string;
  preview?: boolean;
}

type MaybeAsync<Fn extends (...args: any) => any> = Fn | ((...args: Parameters<Fn>) => Promise<ReturnType<Fn>>)

export type SharedData = SSRConfig & { meta: Meta; previewMode: boolean }

export type GetStaticProps<Props = {}, Query = {}> = MaybeAsync<(ctx: GetStaticPropsCtx<Query>) => { props?: Props & SharedData; notFound?: true }>

export const getSharedData = async <T extends GetStaticPropsCtx<any>>(ctx: T): Promise<SharedData> => {
  const api = createApi(ctx)

  const [ssrConfig, meta] = await Promise.all([
    serverSideTranslations(ctx.locale),
    api.meta()
  ])

  return {
    ...ssrConfig,
    meta,
    previewMode: !!ctx.preview
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

  return {
    ...getStaticPathsResult,
    paths: ['uk', 'en'].flatMap(locale => getStaticPathsResult.paths.map(path => ({ ...path, locale })))
  }
}
