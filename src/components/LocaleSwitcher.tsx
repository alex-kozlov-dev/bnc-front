import { useRouter } from 'next/router'
import { theme } from 'src/theme'
import styled from 'styled-components'
import { Link } from './Link'

const Anchor = styled.a`
  ${theme.reset.link}
`

type Props = {
  className?: string;
}

export const LocaleSwitcher = ({ className }: Props) => {
  const { query: { locale } } = useRouter()

  return (
    <Link locale={locale === 'uk' ? 'en' : 'uk'} passHref>
      <Anchor className={className}>
        {locale === 'uk' ? 'English' : 'Українська'}
      </Anchor>
    </Link>
  )
}
