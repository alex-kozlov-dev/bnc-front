import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'
import { t } from 'src/theme'
import { PageLayout } from 'src/components/PageLayout'

import '@fortawesome/fontawesome-free/css/all.css'

const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    color: ${t.colors.gray[8]};
    font-family: "Montserrat", -apple-system, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    background: ${t.colors.gray[8]};
  }
`

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </>
  )
}

export default MyApp
