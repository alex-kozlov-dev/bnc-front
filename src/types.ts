type GetStaticPropsCtx<Query = {}> = {
  params: Query
}

export type GetStaticProps<Props = {}, Query = {}> = (ctx: GetStaticPropsCtx<Query>) => { props?: Props; notFound?: true }
