import { ComponentType, FC, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Meta } from 'src/api/types'
import { theme } from 'src/theme'
import { isTruthy } from 'src/utils'
import styled, { createGlobalStyle } from 'styled-components'
import { Footer } from './Footer'
import { Header } from './Header'
import { MetaProvider } from './MetaProvider'
import { PreviewModeBanner } from './PreviewModeBanner'
import { TopHeader } from './TopHeader'

const GlobalStyles = createGlobalStyle`
  body {
    background: ${theme.colors.gray[8]};
  }
`

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: white;
`

const Main = styled.main`
  flex: 1;
`

const useNavigationLinks = (meta: Meta) => {
  const { t } = useTranslation()

  return useMemo(() => [
    { title: t('Home'), href: '/' },
    meta.posts_exists && { title: t('Our work'), href: '/our-work' },
    meta.files_exists && { title: t('Documents'), href: '#' },
    { title: t('Contacts'), href: '/contacts' }
  ].filter(isTruthy), [meta.files_exists, meta.posts_exists, t])
}

export type LayoutProps = {
  meta: Meta;
  previewMode: boolean;
}

export const PageLayout: FC<LayoutProps> = ({ children, meta, previewMode }) => {
  const links = useNavigationLinks(meta)

  return (
    <MetaProvider value={meta}>
      <Container>
        <GlobalStyles />
        <TopHeader socialLinks={meta.social_links} />
        <Header links={links} logo={meta.logo} />
        <Main>
          {children}
        </Main>
        <Footer logo={meta.logo_inverted} links={links} socialLinks={meta.social_links} text={meta.description} copyright={meta.copyright} />
        {previewMode && <PreviewModeBanner />}
      </Container>
    </MetaProvider>
  )
}

export const withLayout = <C extends ComponentType<any>>(Comp: C) => {
  const WithLayout = (props: any) => (
  <PageLayout meta={props.meta} previewMode={props.previewMode}>
    <Comp {...props} />
  </PageLayout>
  )

  const displayName = Comp.displayName || Comp.name || 'Anonymous'

  WithLayout.displayName = `WithLayout(${displayName})`

  return WithLayout
}
