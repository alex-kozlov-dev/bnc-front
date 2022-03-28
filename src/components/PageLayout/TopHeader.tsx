import { theme } from 'src/theme'
import styled from 'styled-components'
import { LocaleSwitcher } from '../LocaleSwitcher'
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

const LocaleLink = styled(LocaleSwitcher)`
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
      <LocaleLink />
    </Container>
  )
}
