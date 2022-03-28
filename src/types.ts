type GetStaticPropsCtx<Query = {}> = {
  params: Query
  locale: string;
}

type MaybeAsync<Fn extends (...aegs: any) => any> = Fn | ((...args: Parameters<Fn>) => Promise<ReturnType<Fn>>)

export type GetStaticProps<Props = {}, Query = {}> = MaybeAsync<(ctx: GetStaticPropsCtx<Query>) => { props?: Props; notFound?: true }>
