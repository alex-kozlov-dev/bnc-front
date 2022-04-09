import { Homepage } from 'src/api/types'
import { PageTitle } from 'src/components/PageTitle'
import { DonateCTASection } from 'src/components/sections/DonateCTASection'
import { IconTextListSection } from 'src/components/sections/IconTextListSection'
import { NumberedTextListSection } from 'src/components/sections/NumberedTextListSection'
import { PartnersSection } from 'src/components/sections/PartnersSection'
import { QASection } from 'src/components/sections/QASection'
import { TextImageSection } from 'src/components/sections/TextImageSection'
import { TextSection } from 'src/components/sections/TextSection'
import { Splash } from './Splash'

export type HomeProps = {
  data: Homepage;
}

export const Home = ({ data }: HomeProps) => {
  return (
    <>
      <PageTitle />
      <Splash title={data.splash_title} text={data.splash_text} />
      {data.page_sections.map((section, i) => {
        const variant = i % 2 ? 'white' : 'gray'

        switch (section.section_type) {
          case 'text':
            return <TextSection key={section.id} variant={variant} data={section} />
          case 'text_image':
            return <TextImageSection key={section.id} variant={variant} data={section} />
          case 'donate_cta':
            return <DonateCTASection key={section.id} data={section} />
          case 'text_list':
            return <NumberedTextListSection key={section.id} variant={variant} data={section} />
          case 'partners':
            return <PartnersSection key={section.id} variant={variant} data={section} />
          case 'qa':
            return <QASection key={section.id} variant={variant} data={section} />
          case 'icon_text_list':
            return <IconTextListSection key={section.id} variant={variant} data={section} />
          default:
            return null
        }
      })}
    </>
  )
}
