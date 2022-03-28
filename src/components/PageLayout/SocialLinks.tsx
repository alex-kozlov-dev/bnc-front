// import { faFacebook, faInstagram, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { theme } from 'src/theme'
import styled from 'styled-components'
import { Icon } from '../Icon'

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing.s};
  color: ${theme.colors.white};
`

const LinkAnchor = styled.a<{ black?: boolean }>`
  color: ${({ black }) => black ? theme.colors.gray[8] : theme.colors.white};
  transition: color 0.2s, transform 0.2s;
  &:hover {
    color: ${theme.colors.blue};
  }

  &:active {
    transform: translateY(-2px);
  }
`

type Props = {
  black?: boolean;
}

export const SocialLinks = ({ black }: Props) => {
  return (
    <Container>
      <Link href="#" passHref>
        <LinkAnchor black={black} >
          <Icon prefix="fab" icon="fa-facebook" />
        </LinkAnchor>
      </Link>
      <Link href="#" passHref>
        <LinkAnchor black={black} >
          <Icon prefix="fab" icon="fa-instagram" />
        </LinkAnchor>
      </Link>
      <Link href="#" passHref>
        <LinkAnchor black={black} >
          <Icon prefix="fab" icon="fa-twitter" />
        </LinkAnchor>
      </Link>
      <Link href="#" passHref>
        <LinkAnchor black={black} >
          <Icon prefix="fab" icon="fa-telegram" />
        </LinkAnchor>
      </Link>
    </Container>
  )
}
