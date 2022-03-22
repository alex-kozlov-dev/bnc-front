import { mainMock } from 'mock/main'
import type { GetStaticProps, NextPage } from 'next'
import { Home } from 'src/pages/Home/Home'

type StaticProps = {
  splash: {
    title: string;
    text: string;
  }
}

export const getStaticProps: GetStaticProps<StaticProps> = () => {
  return {
    props: {
      splash: {
        title: mainMock.splash.title,
        text: mainMock.splash.text
      }
    }
  }
}

const HomePage: NextPage<StaticProps> = ({ splash }) => {
  return <Home splash={splash} />
}

export default HomePage
