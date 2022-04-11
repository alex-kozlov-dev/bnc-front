import { GetStaticPropsCtx } from 'src/nextHelpers'
import { createClient } from './client'
import { File, Homepage, Meta, PaymentDetailsResponse, PostResponse, PostShort } from './types'

export const createApi = (ctx?: GetStaticPropsCtx) => {
  const { locale = 'en', preview = true } = ctx || {}
  const client = createClient(locale, preview)

  return {
    homepage: () => client.get<Homepage>('/homepage/'),
    meta: () => client.get<Meta>('/meta/'),
    posts: () => client.get<PostShort[]>('/posts/'),
    post: (slug: string) => client.get<PostResponse>(`/posts/${slug}/`),
    paymentDetails: () => client.get<PaymentDetailsResponse>('/payment_details/'),
    files: () => client.get<File[]>('/files/')
  }
}
