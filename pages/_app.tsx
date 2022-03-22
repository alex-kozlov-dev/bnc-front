import type { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { t, theme } from 'src/theme'
import { PageLayout } from 'src/components/PageLayout'

const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    color: ${t.colors.gray[8]};
    font-family: "Montserrat", -apple-system, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
  }
`

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </ThemeProvider>
  )
}

export default MyApp
