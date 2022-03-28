import NextLink, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { useMemo, FC } from 'react'

type PassLinkProps = Omit<LinkProps, 'href' | 'locale'>

type OwnProps = {
  locale: string;
} | {
  href: string;
  locale?: string;
}

type Props = PassLinkProps & OwnProps

// @ts-ignore
export const Link:FC<Props> = ({ locale, href, children, ...props }) => {
  const { pathname, query } = useRouter()

  const url = useMemo(() => {
    if (href) {
      return `/${locale || query.locale || 'uk'}${href}`
    } else {
      return { pathname, query: { ...query, locale } }
    }
  }, [href, locale, pathname, query])

  return <NextLink {...props} href={url}>{children}</NextLink>
}
