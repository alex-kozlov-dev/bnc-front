import { lorem } from 'mock/lorem'
import Link from 'next/link'
import { t } from 'src/theme'
import styled from 'styled-components'
import { Content } from '../Content'
import { Col, Row } from '../Grid'
import { Logo } from '../Logo'
import { Rhytm } from '../Rhytm'
import { Text } from '../Typography'
import { SocialLinks } from './SocialLinks'

const Container = styled.footer`
  background: ${t.colors.gray[8]};
  color: ${t.colors.white};
`

const Nav = styled.nav`
  flex: 1;
  height: 100%;
`

const MenuList = styled.ul`
  ${t.reset.ul}
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
      <Content>
        <Rhytm margin={0.8}>
          <Row justify="space-between">
            <Col size={4}>
              <Rhytm margin={0.8}>
                <Logo />
                <Text typography={t.typography.text['0.8'].regular}>
                  {lorem(15)}
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
          </Row>
          <SocialLinks />
          <Text typography={t.typography.text['0.8'].regular} align="center">
            © BNC, 2022
          </Text>
        </Rhytm>
      </Content>
    </Container>
  )
}
