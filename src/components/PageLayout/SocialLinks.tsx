import { faFacebook, faInstagram, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { t } from 'src/theme'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: ${t.spacing.s};
  color: ${t.colors.white};
`

const LinkAnchor = styled.a<{ black?: boolean }>`
  color: ${({ black, theme }) => black ? theme.colors.gray[8] : theme.colors.white};
  transition: color 0.2s, transform 0.2s;
  &:hover {
    color: ${t.colors.blue};
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
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </LinkAnchor>
      </Link>
      <Link href="#" passHref>
        <LinkAnchor black={black} >
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </LinkAnchor>
      </Link>
      <Link href="#" passHref>
        <LinkAnchor black={black} >
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </LinkAnchor>
      </Link>
      <Link href="#" passHref>
        <LinkAnchor black={black} >
          <FontAwesomeIcon icon={faTelegram} size="lg" />
        </LinkAnchor>
      </Link>
    </Container>
  )
}
