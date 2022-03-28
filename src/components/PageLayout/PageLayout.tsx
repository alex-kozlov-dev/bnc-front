import { FC } from 'react'
import { useTranslation } from 'react-i18next'
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

const useNavigationLinks = () => {
  const { t } = useTranslation()

  return [
    { title: t('Home'), href: '/' },
    { title: t('Projects'), href: '/projects' },
    { title: t('Documents'), href: '#' },
    { title: t('Contacts'), href: '#' }
  ]
}

export type MetaProps = {
  footer: {
    text: string;
  }
}

export const PageLayout: FC<MetaProps> = ({ children, footer }) => {
  const links = useNavigationLinks()

  return (
    <Container>
      <TopHeader />
      <Header links={links} />
      <Main>
        {children}
      </Main>
      <Footer links={links} text={'footer.text'} />
    </Container>
  )
}
