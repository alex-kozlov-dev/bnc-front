import { FC } from 'react'
import styled from 'styled-components'
import { Footer } from './Footer'
import { Header } from './Header'

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled.main`
  flex: 1;
`

const links = [
  { title: 'Home', href: '#' },
  { title: 'Projects', href: '#' },
  { title: 'Documents', href: '#' },
  { title: 'Contacts', href: '#' },
  { title: '🇺🇦 Українська', short: '🇺🇦', href: '#' }
]

export const PageLayout: FC = ({ children }) => {
  return (
    <Container>
      <Header links={links} />
      <Main>
        {children}
      </Main>
      <Footer links={links} />
    </Container>
  )
}
