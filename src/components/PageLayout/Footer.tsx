import { useTranslation } from 'react-i18next'
import { theme } from 'src/theme'
import styled from 'styled-components'
import { Content } from '../Content'
import { Col, Row } from '../Grid'
import { Link } from '../Link'
import { Logo } from '../Logo'
import { Rhytm } from '../Rhytm'
import { Text } from '../Typography'
import { SocialLink, SocialLinks } from './SocialLinks'

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
  justify-content: space-between;
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

type Props = {
  text: string;
  socialLinks: SocialLink[];
  links: {
    title: string;
    href: string;
  }[]
}

export const Footer = ({ links, socialLinks, text }: Props) => {
  const { t } = useTranslation()

  return (
    <Container>
      <Content>
        <Rhytm margin={0.8}>
          <Row justify="space-between">
            <Col size={4}>
              <Rhytm margin={0.8}>
                <Logo />
                <Text typography={theme.typography.text['0.8'].regular}>
                  {text}
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
          <SocialLinks links={socialLinks} />
          <Text typography={theme.typography.text['0.8'].regular} align="center">
            {t('© BNC, 2022')}
          </Text>
        </Rhytm>
      </Content>
    </Container>
  )
}
