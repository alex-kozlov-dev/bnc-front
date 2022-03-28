import Link from 'next/link'
import { useRouter } from 'next/router'
import { theme } from 'src/theme'
import styled from 'styled-components'

const Anchor = styled.a`
  ${theme.reset.link}
`

type Props = {
  className?: string;
}

export const LocaleSwitcher = ({ className }: Props) => {
  const { locale, pathname, asPath, query } = useRouter()

  return (
    <Link href={{ pathname, query }} as={asPath} locale={locale === 'uk' ? 'en' : 'uk'} passHref>
      <Anchor className={className}>
        {locale === 'uk' ? 'English' : 'Українська'}
      </Anchor>
    </Link>
  )
}
