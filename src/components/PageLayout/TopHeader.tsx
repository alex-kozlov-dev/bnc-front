import Link from 'next/link'
import { t } from 'src/theme'
import styled from 'styled-components'
import { SocialLinks } from './SocialLinks'

const Container = styled.div`
  position: relative;
  z-index: 1;
  padding: 0 ${t.spacing.m};
  background: ${t.colors.gray[8]};
  height: ${t.sizes.topHeader};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const MenuList = styled.ul`
  ${t.reset.ul}
  display: flex;
  gap: ${t.spacing.xs};
`

const MenuItem = styled.li`
  ${t.reset.li}
`

const MenuLink = styled.a`
  ${t.reset.link}
  position: relative;
  padding: ${t.spacing.xs};
  color: ${t.colors.white};
  transition: color 0.2s, transform 0.2s;
  &:hover {
    color: ${t.colors.blue};
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
