import { GetStaticPropsCtx } from 'src/nextHelpers'
import { createClient } from './client'
import { File, Homepage, Meta, PaymentDetailsResponse, PostResponse, PostShort } from './types'

export const createApi = (ctx: GetStaticPropsCtx) => {
  const client = createClient(ctx)

  return {
    homepage: () => client.get<Homepage>('/homepage/'),
    meta: () => client.get<Meta>('/meta/'),
    posts: () => client.get<PostShort[]>('/posts/'),
    post: (id: number) => client.get<PostResponse>(`/posts/${id}/`),
    paymentDetails: () => client.get<PaymentDetailsResponse>('/payment_details/'),
    files: () => client.get<File[]>('/files/')
  }
}
