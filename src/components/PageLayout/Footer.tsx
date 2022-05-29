import Link from 'next/link'
import { Meta } from 'src/api/types'
import { theme } from 'src/theme'
import styled from 'styled-components'
import { Content } from '../Content'
import { Col, Row } from '../Grid'
import { Rhytm } from '../Rhytm'
import { Text } from '../Typography'
import { SocialLinks } from './SocialLinks'
import { useNavigationLinks } from './useNavigationLinks'

const LogoLink = styled.a`
  height: 48px;
  display: block;
`

const LogoImg = styled.img`
  height: 100%;
  display: block;
`

const Container = styled.footer`
  background: ${theme.colors.gray[8]};
  color: ${theme.colors.white};
`

const Nav = styled.nav`
  flex: 1;
  height: 100%;
`

const MenuList = styled.ul`
  ${theme.reset.ul}
  min-height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
`

const MenuItem = styled.li`
  ${theme.reset.li}
  text-align: right;
`

const MenuLink = styled.a`
  ${theme.reset.link}
  display: inline-block;
  position: relative;
  padding: 0 ${theme.spacing.xs};

  transition: color 0.2s, transform 0.2s;
  &:hover {
    color: ${theme.colors.blue};
  }

  &:active {
    transform: translateX(-2px);
  }
`

const DesktopOnlyRow = styled(Row)`
  @media (max-width: ${theme.responsive.mobile}) {
    display: none;
  }
`

type Props = {
  meta: Meta;
}

export const Footer = ({ meta }: Props) => {
  const links = useNavigationLinks(meta, true)
  return (
    <Container>
      <Content>
        <Rhytm margin={0.8}>
          <DesktopOnlyRow justify="space-between">
            <Col size={4}>
              <Rhytm margin={0.8}>
                <Link href="/" passHref>
                  <LogoLink>
                    <LogoImg src={meta.logo_inverted} />
                  </LogoLink>
                </Link>
                <Text typography={theme.typography.text['0.8'].regular}>
                  {meta.description}
                </Text>
              </Rhytm>
            </Col>
            <Col size={4}>
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
            </Col>
          </DesktopOnlyRow>
          <SocialLinks links={meta.social_links} />
          <Text typography={theme.typography.text['0.8'].regular} align="center">
            {meta.copyright}
          </Text>
        </Rhytm>
      </Content>
    </Container>
  )
}
