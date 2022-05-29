import Link from 'next/link'
import { Meta } from 'src/api/types'
import { theme } from 'src/theme'
import styled from 'styled-components'
import { Icon } from '../Icon'
import { LocaleSwitcher } from '../LocaleSwitcher'
import { SocialLinks } from './SocialLinks'
import { useNavigationLinks } from './useNavigationLinks'

export const MobileMenuButton = styled.button.attrs({
  children: <Icon icon="fa-bars" size="2x" />
})`
  ${theme.reset.button}
`

const CloseButton = styled.button.attrs({
  children: <Icon icon="fa-times" size="2x" />
})`
  ${theme.reset.button}
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  height: 80px;
  padding: 0 24px;
`

const MenuContainer = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  transition: transform 0.3s, opacity 0.3s;
  transform: scale(${({ open }) => open ? 1 : 0});
  opacity: ${({ open }) => open ? 1 : 0};
  pointer-events: ${({ open }) => open ? 'all' : 'none'};
  z-index: 666;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding-bottom: 24px;
`

const MenuNav = styled.nav``

const MenuList = styled.ul`
  ${theme.reset.ul}

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  padding: 0 ${theme.layout.spacing.xs};
`

const MenuItem = styled.li`
  ${theme.reset.li}
`

const MenuLink = styled.a`
  ${theme.reset.link}
  ${theme.typography.text['1.5'].bold}
  display: inline-block;
  padding: 8px 0;
`

const Locale = styled(LocaleSwitcher)`
  ${theme.typography.text['1.5'].bold}
  display: inline-block;
  padding: 8px 0;
  text-align: center;
  margin: auto auto 16px;
`

type MenuProps = {
  open: boolean;
  meta: Meta;
  onClose: () => void;
}

export const MobileMenu = ({ open, onClose, meta }: MenuProps) => {
  const links = useNavigationLinks(meta, true)

  return (
    <MenuContainer open={open}>
      <Header>
        <CloseButton onClick={onClose} />
      </Header>
      <MenuNav>
        <MenuList onClick={onClose}>
          {links.map(({ title, href }, i) => (
            <MenuItem key={i}>
              <Link href={href} passHref>
                <MenuLink>
                  {title}
                </MenuLink>
              </Link>
            </MenuItem>
          ))}
        </MenuList>
      </MenuNav>
      <Locale />
      <SocialLinks black links={meta.social_links} size="lg" />
    </MenuContainer>
  )
}
