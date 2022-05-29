import { theme } from 'src/theme'
import styled from 'styled-components'
import { Button } from 'src/components/Button'
import { useEffect, useMemo, useState } from 'react'
import throttle from 'lodash/throttle'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { Meta } from 'src/api/types'
import { useNavigationLinks } from './useNavigationLinks'
import { MobileMenu, MobileMenuButton } from './MobileMenu'

const Logo = styled.img`
  height: 100%;
`
const LogoLink = styled.a`
  position: relative;
  top: -8px;
  height: 39px;
  margin-right: auto;

  @media (max-width: ${theme.responsive.mobile}) {
    top: 0;
  }
`

const Container = styled.header<{ transparent: boolean }>`
  position: sticky;
  top: 0;
  z-index: 666;
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

const Menu = styled.nav`
  @media (max-width: ${theme.responsive.mobile}) {
    display: none;
  }
`

const DonateButton = styled(Button)`
  @media (max-width: ${theme.responsive.mobile}) {
    display: none;
  }
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

type Props = {
  meta: Meta;
}

export const Header = ({ meta }: Props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const scrolledToTop = useScrolledToTop()
  const { t } = useTranslation()

  const links = useNavigationLinks(meta, false)

  return (
    <>
      <Container transparent={scrolledToTop}>
        <Link href="/" passHref>
          <LogoLink>
            <Logo src={meta.logo} />
          </LogoLink>
        </Link>
        <Menu>
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
        </Menu>
        <Link href="/donate" passHref>
          <DonateButton as="a">
            {t('Donate now')}
          </DonateButton>
        </Link>
        <MobileMenuButton onClick={() => setMobileMenuOpen(true)} />
      </Container>
      <MobileMenu meta={meta} open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  )
}
