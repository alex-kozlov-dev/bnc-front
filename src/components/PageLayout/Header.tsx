import { theme } from 'src/theme'
import styled from 'styled-components'
import { Button } from 'src/components/Button'
import Link from 'next/link'
import { Logo } from '../Logo'
import { useEffect, useMemo, useState } from 'react'
import throttle from 'lodash/throttle'

const HeaderLogo = styled(Logo)`
  margin-right: auto;
`

const Container = styled.header<{ transparent: boolean }>`
  position: sticky;
  top: 0;
  z-index: 2;
  height: ${theme.sizes.header};
  /* margin-bottom: -${theme.sizes.header}; */
  padding: 0 ${theme.spacing.m};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.s};

  transition: background 0.2s, box-shadow 0.2s;
  background: ${({ transparent }) => transparent ? 'transparent' : 'white'};
  ${({ transparent }) => transparent ? theme.shadow[0] : theme.shadow[1]}
`

const MenuList = styled.ul`
  ${theme.reset.ul}
  display: flex;
  gap: ${theme.spacing.xs};
`

const MenuItem = styled.li`
  ${theme.reset.li}
`

const MenuLink = styled.a<{ white: boolean }>`
  ${theme.reset.link}
  ${theme.typography.text[1].bold}
  position: relative;
  padding: ${theme.spacing.xs};

  transition: color 0.2s, transform 0.2s;
  &:hover {
    color: ${theme.colors.blue};
  }

  &:active {
    transform: translateY(-2px);
  }
`

type Props = {
  links: {
    title: string;
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
      <nav>
        <MenuList>
          {links.map(({ title, href }, i) => (
            <MenuItem key={i}>
              <Link href={href} passHref>
                <MenuLink white={scrolledToTop}>
                  {title}
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
