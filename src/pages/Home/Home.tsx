import { Homepage } from 'src/api/types'
import { PageTitle } from 'src/components/PageTitle'
import { TextSection } from 'src/components/TextSection'
import { Splash } from './Splash'
import { IconItemsImageSection } from './IconItemsImageSection'
import { CTASection } from './CTASection'
import { PartnersSection } from './PartnersSection'
import { WhoWeHelpSection } from './WhoWeHelpSection'
import { Trans } from 'react-i18next'
import { Stroke } from 'src/components/Stroke/Stroke'
import { Intro } from './Intro'

export type HomeProps = {
  data: Homepage;
}

export const Home = ({ data }: HomeProps) => {
  return (
    <>
      <PageTitle />
      <Splash
        title={data.splash_title}
        text={data.splash_text}
        image={data.splash_image}
      />
      <Intro
        text={data.intro_text}
        image={data.intro_image}
        text2={data.intro_text_2}
      />
      <IconItemsImageSection
        title={<Trans>Help in the <Stroke>wartime</Stroke></Trans>}
        imageUrl={data.wartime_image}
        items={data.wartime_items}
        variant={{ desktop: 'gray', tablet: 'white' }}
      />
      <IconItemsImageSection
        title={<Trans>Help in the <Stroke blue>postwar</Stroke> period</Trans>}
        imageUrl={data.peacetime_image}
        items={data.peacetime_items}
        variant={{ desktop: 'white', tablet: 'gray' }}
        reversed
      />
      <CTASection cta={data.cta} />
      <PartnersSection
        partners={data.partners}
      />
      <WhoWeHelpSection
        items={data.who_we_help}
      />
      <TextSection
        text={data.outro_text}
      />
    </>
  )
}
