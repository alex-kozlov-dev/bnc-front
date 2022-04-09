import { GetStaticPropsCtx } from '../nextHelpers'

const encode = (str: string) => Buffer.from(str).toString('base64')

export const createClient = (ctx: GetStaticPropsCtx) => {
  const apiUrl = process.env.API_URL
  const user = process.env.API_USER
  const password = process.env.API_PASSWORD
  const localePrefix = ctx.locale

  const qs = ctx.preview ? '?preview=true' : ''

  const headers = new Headers()
  headers.append('Authorization', 'Basic ' + encode(`${user}:${password}`))

  const get = async <T = {}>(url: string) => {
    const res = await fetch(`${apiUrl}/${localePrefix}${url}${qs}`, {
      method: 'GET',
      headers
    })
    const data = await res.json() as T

    return data
  }

  return { get: get }
}
