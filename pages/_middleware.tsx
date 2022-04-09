import { NextMiddleware, NextResponse } from 'next/server'

const isMaintenance = process.env.MAINTENANCE === 'true'

export const middleware: NextMiddleware = (req) => {
  if (
    isMaintenance &&
    req.nextUrl.pathname === '/' &&
    !req.cookies.__next_preview_data
  ) {
    const url = req.nextUrl.clone()
    url.pathname = '/coming-soon'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}
