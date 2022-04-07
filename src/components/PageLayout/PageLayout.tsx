import { ComponentType, FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { Footer } from './Footer'
import { Header } from './Header'
import { PreviewModeBanner } from './PreviewModeBanner'
import { SocialLink } from './SocialLinks'
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

export type LayoutProps = {
  footer: {
    text: string;
  }
  socialLinks: SocialLink[];
  previewMode: boolean;
}

export const PageLayout: FC<LayoutProps> = ({ children, footer, socialLinks, previewMode }) => {
  const links = useNavigationLinks()

  return (
    <Container>
      <TopHeader socialLinks={socialLinks} />
      <Header links={links} />
      <Main>
        {children}
      </Main>
      <Footer links={links} socialLinks={socialLinks} text={footer.text} />
      {previewMode && <PreviewModeBanner />}
    </Container>
  )
}

export const withLayout = <C extends ComponentType<any>>(Comp: C) => {
  const WithLayout = (props: any) => (
  <PageLayout {...props.layout}>
    <Comp {...props} />
  </PageLayout>
  )

  const displayName = Comp.displayName || Comp.name || 'Anonymous'

  WithLayout.displayName = `WithLayout(${displayName})`

  return WithLayout
}
