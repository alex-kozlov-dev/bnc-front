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

export type SocialLink = {
  type: 'facebook' | 'instagram' | 'twitter' | 'telegram';
  url: string;
}

type Props = {
  links: SocialLink[];
  black?: boolean;
}

export const SocialLinks = ({ links, black }: Props) => {
  return (
    <Container>
      {links.map(({ type, url }, i) => (
        <LinkAnchor black={black} href={url} target="_blank" key={i}>
          <Icon prefix="fab" icon={`fa-${type}`} />
        </LinkAnchor>
      ))}
    </Container>
  )
}
