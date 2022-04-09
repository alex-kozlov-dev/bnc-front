import { createContext, useContext } from 'react'
import { Meta } from 'src/api/types'

const ctx = createContext<Meta | null>(null)

export const MetaProvider = ctx.Provider

export const useMeta = () => {
  const ctxValue = useContext(ctx)

  if (!ctxValue) throw new Error('useMeta was used outside of MetaProvider')

  return ctxValue
}
