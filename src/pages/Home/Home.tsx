import { DonateCTASection } from 'src/components/sections/DonateCTASection'
import { IconTextListSection } from 'src/components/sections/IconTextListSection'
import { NumberedTextListSection } from 'src/components/sections/NumberedTextListSection'
import { PartnersSection } from 'src/components/sections/PartnersSection'
import { QASection } from 'src/components/sections/QASection'
import { TextImageSection } from 'src/components/sections/TextImageSection'
import { TextSection } from 'src/components/sections/TextSection'
import { Splash } from './Splash'

export type HomeProps = {
  splash: {
    title: string;
    text: string;
  };
  iconTextList: {
    items: {
      icon: string;
      title: string;
      text: string;
    }[];
  };
  textImage: {
    title: string;
    text: string;
    imageUrl: string;
    imageAlt: string;
  };
  text: {
    title: string;
    text: string;
  };
  numberedList: {
    items: {
      text: string;
    }[];
  };
  donateCta: {
    cta: string;
  };
  partners: {
    items: {
      imageUrl: string;
      alt: string;
    }[];
  };
  qa: {
    items: {
      question: string;
      answer: string;
    }[];
  }
}

export const Home = ({ splash, iconTextList, textImage, text, numberedList, donateCta, partners, qa }: HomeProps) => {
  return (
    <>
      <Splash {...splash} />
      <IconTextListSection {...iconTextList} variant="gray" />
      <TextImageSection {...textImage} />
      <NumberedTextListSection {...numberedList} variant="gray" />
      <DonateCTASection title={donateCta.cta}/>
      <TextSection {...text} variant="gray" />
      <PartnersSection partners={partners.items} />
      <QASection {...qa} variant="gray" />
    </>
  )
}
