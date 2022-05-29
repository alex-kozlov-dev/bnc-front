import { ComponentType, FC } from 'react'
import { Meta } from 'src/api/types'
import { theme } from 'src/theme'
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

  i {
    color: inherit;
  }
`

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: white;
  overflow-x: hidden;
`

const Main = styled.main`
  flex: 1;
`

export type LayoutProps = {
  meta: Meta;
  previewMode: boolean;
}

export const PageLayout: FC<LayoutProps> = ({ children, meta, previewMode }) => {
  return (
    <MetaProvider value={meta}>
      <Container>
        <GlobalStyles />
        <TopHeader socialLinks={meta.social_links} />
        <Header meta={meta} />
        <Main>
          {children}
        </Main>
        <Footer meta={meta} />
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
