import { lorem } from 'mock/lorem'
import { DonateCTASection } from 'src/components/sections/DonateCTASection'
import { IconTextListSection } from 'src/components/sections/IconTextListSection'
import { NumberedTextListSection } from 'src/components/sections/NumberedTextListSection'
import { PartnersSection } from 'src/components/sections/PartnersSection'
import { QASection } from 'src/components/sections/QASection'
import { TextImageSection } from 'src/components/sections/TextImageSection'
import { TextSection } from 'src/components/sections/TextSection'
import { Splash } from './Splash'

type Props = {
  splash: {
    title: string;
    text: string;
  }
}

const partners = [
  {
    imageUrl: 'https://savelife.in.ua/templates/site/img/kiis.png',
    alt: 'kiis'
  },
  {
    imageUrl: 'https://savelife.in.ua/templates/site/img/agama.png',
    alt: 'agama'
  },
  {
    imageUrl: 'https://savelife.in.ua/templates/site/img/bakertilly.png',
    alt: 'bakertilly'
  },
  {
    imageUrl: 'https://savelife.in.ua/templates/site/img/kiis.png',
    alt: 'kiis'
  },
  {
    imageUrl: 'https://savelife.in.ua/templates/site/img/agama.png',
    alt: 'agama'
  },
  {
    imageUrl: 'https://savelife.in.ua/templates/site/img/bakertilly.png',
    alt: 'bakertilly'
  }
]

const qa = [
  {
    question: `${lorem(4)}?`,
    answer: lorem()
  },
  {
    question: `${lorem(4)}?`,
    answer: lorem()
  },
  {
    question: `${lorem(4)}?`,
    answer: lorem()
  },
  {
    question: `${lorem(4)}?`,
    answer: lorem()
  }
]

const numberedList = [
  { text: lorem(20) },
  { text: lorem(20) },
  { text: lorem(20) },
  { text: lorem(20) }
]

const iconList = [
  {
    icon: 'fa-biohazard',
    title: lorem(4),
    text: lorem(20)
  },
  {
    icon: 'fa-broadcast-tower',
    title: lorem(5),
    text: lorem(20)
  },
  {
    icon: 'fa-bus',
    title: lorem(4),
    text: lorem(20)
  }
] as any

export const Home = ({ splash }: Props) => {
  return (
    <>
      <Splash {...splash} />
      <IconTextListSection items={iconList} variant="gray" />
      <TextImageSection title={lorem(3)} text={lorem()} imageUrl="https://www.fillmurray.com/1024/768" imageAlt={lorem(2)}/>
      <NumberedTextListSection items={numberedList} variant="gray" />
      <DonateCTASection title={lorem(4)}/>
      <TextSection title={lorem(3)} text={lorem()} variant="gray" />
      <PartnersSection partners={partners} />
      <QASection items={qa} variant="gray" />
    </>
  )
}
