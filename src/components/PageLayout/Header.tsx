import { t } from 'src/theme'
import styled from 'styled-components'
import { Button } from 'src/components/Button'
import Link from 'next/link'
import { Logo } from '../Logo'
import { useEffect, useMemo, useState } from 'react'
import throttle from 'lodash/throttle'
import { SocialLinks } from './SocialLinks'

const HeaderLogo = styled(Logo)`
  margin-right: auto;
`

const Container = styled.header<{ transparent: boolean }>`
  position: fixed;
  z-index: 2;
  height: 80px;
  left: 0;
  right: 0;
  padding: 0 ${t.spacing.m};
  display: flex;
  align-items: center;
  gap: ${t.spacing.s};

  transition: background 0.2s, box-shadow 0.2s;
  background: ${({ transparent }) => transparent ? 'transparent' : 'white'};
  ${({ transparent, theme }) => transparent ? theme.shadow[0] : theme.shadow[1]}
`

const MenuList = styled.ul`
  ${t.reset.ul}
  display: flex;
  gap: ${t.spacing.xs};
`

const MenuItem = styled.li`
  ${t.reset.li}
`

const MenuLink = styled.a<{ white: boolean }>`
  ${t.reset.link}
  ${t.typography.text[1].bold}
  position: relative;
  padding: ${t.spacing.xs};

  transition: color 0.2s, transform 0.2s;
  &:hover {
    color: ${t.colors.blue};
  }

  &:active {
    transform: translateY(-2px);
  }
`

type Props = {
  links: {
    title: string;
    short?: string;
    href: string;
  }[]
}

const scrollOffset = 40
const useScrolledToTop = () => {
  const [scrolledToTop, setScrolledToTop] = useState(true)

  const checkScroll = useMemo(() => {
    return throttle(() => setScrolledToTop(window.scrollY <= scrollOffset), 100)
  }, [])

  useEffect(() => {
    checkScroll()
  }, [checkScroll])

  useEffect(() => {
    document.addEventListener('scroll', checkScroll)

    return () => {
      document.removeEventListener('scroll', checkScroll)
    }
  }, [checkScroll])

  return scrolledToTop
}

export const Header = ({ links }: Props) => {
  const scrolledToTop = useScrolledToTop()

  return (
    <Container transparent={scrolledToTop}>
      <HeaderLogo />
      <SocialLinks black />
      <nav>
        <MenuList>
          {links.map(({ title, short, href }, i) => (
            <MenuItem key={i}>
              <Link href={href} passHref>
                <MenuLink white={scrolledToTop}>
                  {short || title}
                </MenuLink>
              </Link>
            </MenuItem>
          ))}
        </MenuList>
      </nav>
      <Button>
        Donate now
      </Button>
    </Container>
  )
}
