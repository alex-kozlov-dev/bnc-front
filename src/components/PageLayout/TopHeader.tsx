import Link from 'next/link'
import { theme } from 'src/theme'
import styled from 'styled-components'
import { SocialLinks } from './SocialLinks'

const Container = styled.div`
  position: relative;
  z-index: 1;
  padding: 0 ${theme.spacing.m};
  background: ${theme.colors.gray[8]};
  height: ${theme.sizes.topHeader};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const MenuList = styled.ul`
  ${theme.reset.ul}
  display: flex;
  gap: ${theme.spacing.xs};
`

const MenuItem = styled.li`
  ${theme.reset.li}
`

const MenuLink = styled.a`
  ${theme.reset.link}
  position: relative;
  padding: ${theme.spacing.xs};
  color: ${theme.colors.white};
  transition: color 0.2s, transform 0.2s;
  &:hover {
    color: ${theme.colors.blue};
  }

  &:active {
    transform: translateY(-2px);
  }
`

export const TopHeader = () => {
  return (
    <Container>
      <SocialLinks />
      <MenuList>
        {/* <MenuItem>
          <Link href="#" passHref>
            <MenuLink>
              English
            </MenuLink>
          </Link>
        </MenuItem> */}
        <MenuItem>
          <Link href="#" passHref>
            <MenuLink>
              Українська
            </MenuLink>
          </Link>
        </MenuItem>
      </MenuList>
    </Container>
  )
}
