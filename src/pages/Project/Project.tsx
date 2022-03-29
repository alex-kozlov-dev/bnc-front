import { useTranslation } from 'react-i18next'
import { AspectRatioImage } from 'src/components/AspectRatioImage'
import { Button } from 'src/components/Button'
import { Col, Row } from 'src/components/Grid'
import { Rhytm } from 'src/components/Rhytm'
import { Section } from 'src/components/Section'
import { Heading, Text } from 'src/components/Typography'
import { theme } from 'src/theme'
import styled from 'styled-components'
import { OtherProject } from './OtherProject'

const Buttons = styled.div`
  display: flex;
  gap: ${theme.spacing.l};
`

export type ProjectProps = {
  project: {
    imageUrl: string;
    title: string;
    text: string;
  }
  otherProjects: {
    imageUrl: string;
    title: string;
    slug: string;
  }[]
}

export const Project = ({ project, otherProjects }: ProjectProps) => {
  const { t } = useTranslation()

  return (
    <>
      <Section title={project.title} size="wide">
        <Row gap="xl">
          <Col size={9}>
            <Rhytm>
              <AspectRatioImage src={project.imageUrl} alt={project.title} aspectRatio={16 / 9}/>
            <Text>{project.text}</Text>
            </Rhytm>
          </Col>
          <Col size={3}>
            <Rhytm>
              <Heading typography={theme.typography.head['1.5'].regular}>
                {t('Other projects')}
              </Heading>
              {otherProjects.map((project, i) => (
                <OtherProject key={i} {...project} />
              ))}
            </Rhytm>
          </Col>
        </Row>
      </Section>
      <Section variant='gray' title={t('Donate to projet')}>
        <Rhytm>
          <Heading typography={theme.typography.head['1.5'].regular}>
            {t('SWIFT')}
          </Heading>
          <Text whiteSpace='pre-line'>
            {`Company Name: CO "INTERNATIONAL CHARITABLE FOUNDATION "COME BACK ALIVE"
            Office address: 32, Bohdana Hmelnytskoho St., office 41, Kyiv
            IBAN Code (Euro): UA093052990000026004025029786
            IBAN Code (US Dollar): UA173052990000026009035028620
            Name of the bank: JSC CB "PRIVATBANK", 1D HRUSHEVSKOHO STR., KYIV, 01001, UKRAINE
            Bank SWIFT Code: PBANUA2XXXX
            Purpose of payment: Charitable donation`}
          </Text>
          <Heading typography={theme.typography.head['1.5'].regular}>
            {t('Ukraine bank transfer')}
          </Heading>
          <Text whiteSpace='pre-line'>
            {`IBAN: UA223226690000026007300905964
            ЄДРПОУ: 39696398
            Отримувач: Благодійна Організація «Міжнародний благодійний фонд «Повернись живим»
            Призначення платежу: Благодійна пожертва військовослужбовцям.`}
          </Text>
          <Heading typography={theme.typography.head['1.5'].regular}>
            {t('Other payment methods')}
          </Heading>
          <Buttons>
            <Button>{t('Visa / Mastercard')}</Button>
            <Button>{t('Crypto')}</Button>
          </Buttons>
        </Rhytm>
      </Section>
    </>
  )
}
