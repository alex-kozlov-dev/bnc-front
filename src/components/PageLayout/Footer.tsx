import { lorem } from 'mock/lorem'
import Link from 'next/link'
import { t } from 'src/theme'
import styled from 'styled-components'
import { Logo } from '../Logo'
import { ResponsiveContainer } from '../ResponsiveContainer'
import { SocialLinks } from './SocialLinks'

const Container = styled.footer`
  padding: ${t.spacing.s} ${t.spacing.m};
  background: ${t.colors.gray[8]};
  color: ${t.colors.white};
`

const Inner = styled(ResponsiveContainer)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

const Third = styled.div`
  width: 30%;
`

const Text = styled.p`
  margin: ${t.spacing.xs} 0;
  ${t.typography.text[0.8].regular}
`

const Copy = styled(Text)`
  text-align: center;
`

const Nav = styled.nav`
  flex: 1;
`

const MenuList = styled.ul`
  ${t.reset.ul}
  gap: ${t.spacing.xs};
`

const MenuItem = styled.li`
  ${t.reset.li}
  text-align: right;
`

const MenuLink = styled.a`
  ${t.reset.link}
  display: inline-block;
  position: relative;
  padding: 0 ${t.spacing.xs};

  transition: color 0.2s, transform 0.2s;
  &:hover {
    color: ${t.colors.blue};
  }

  &:active {
    transform: translateX(-2px);
  }
`

type Props = {
  links: {
    title: string;
    href: string;
  }[]
}

export const Footer = ({ links }: Props) => {
  return (
    <Container>
      <ResponsiveContainer>
      </ResponsiveContainer>
      <Inner>
        <Third>
          <Logo />
          <Text>
            {lorem(15)}
          </Text>
        </Third>
        <Third>
          <Nav>
            <MenuList>
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
          </Nav>
        </Third>
      </Inner>
      <SocialLinks />
      <Copy>
        © BNC, 2022
      </Copy>
    </Container>
  )
}
