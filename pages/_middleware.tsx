import { NextMiddleware, NextResponse } from 'next/server'

const isMaintenance = process.env.MAINTENANCE === 'true'

export const middleware: NextMiddleware = (req) => {
  console.log(process.env.MAINTENANCE)
  if (isMaintenance && req.nextUrl.pathname === '/') {
    const url = req.nextUrl.clone()
    url.pathname = '/coming-soon'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}
