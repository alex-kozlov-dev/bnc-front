import { FC } from 'react'
import styled from 'styled-components'
import { Footer } from './Footer'
import { Header } from './Header'
import { TopHeader } from './TopHeader'

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: white;
`

const Main = styled.main`
  flex: 1;
`

const links = [
  { title: 'Home', href: '/' },
  { title: 'Projects', href: '/projects' },
  { title: 'Documents', href: '#' },
  { title: 'Contacts', href: '#' }
]

export const PageLayout: FC = ({ children }) => {
  return (
    <Container>
      <TopHeader />
      <Header links={links} />
      <Main>
        {children}
      </Main>
      <Footer links={links} />
    </Container>
  )
}
