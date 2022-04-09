import { SocialLink } from 'src/api/types'
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
  links: SocialLink[];
  black?: boolean;
}

export const SocialLinks = ({ links, black }: Props) => {
  return (
    <Container>
      {links.map(({ social_type, link }, i) => (
        <LinkAnchor black={black} href={link} target="_blank" key={i}>
          <Icon prefix="fab" icon={`fa-${social_type}`} />
        </LinkAnchor>
      ))}
    </Container>
  )
}
