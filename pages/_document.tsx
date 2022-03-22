import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

class Document extends NextDocument {
  render () {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@900&display=optional" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=optional" rel="stylesheet"/>
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    )
  }
}

export default Document
