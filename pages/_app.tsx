import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'
import { theme } from 'src/theme'

import '@fortawesome/fontawesome-free/css/all.css'
import { appWithTranslation } from 'next-i18next'

const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    color: ${theme.colors.gray[8]};
    font-family: "Raleway", -apple-system, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
  }
`

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default appWithTranslation(MyApp)
