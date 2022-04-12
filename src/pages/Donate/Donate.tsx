import { useTranslation } from 'react-i18next'
import { Payment } from 'src/api/types'
import { Button } from 'src/components/Button'
import { Col, Row } from 'src/components/Grid'
import { PageTitle } from 'src/components/PageTitle'
import { alternateVariant, Section } from 'src/components/Section'
import { Wysiwyg } from 'src/components/Wysiwyg'
import styled from 'styled-components'
import { CryptoWallet } from './CryptoWallet'

const LiqpaySection = styled(Section)`
  text-align: center;
`

export type DonatePageProps = {
  payment: Payment;
}

export const DonatePage = ({ payment }: DonatePageProps) => {
  const { t } = useTranslation()

  const liqpayCorrection = +!!payment.liqpay_link

  return (
    <>
      <PageTitle title={t('Donate')} />
      {payment.liqpay_link && (
        <LiqpaySection title={t('Visa/Mastercard')}>
          <Button as="a" target="_blank" href={payment.liqpay_link}>
            {t('Donate with your card')}
          </Button>
        </LiqpaySection>
      )}
      {payment.payment_details.map(({ id, title, text }, i) => (
        <Section key={id} title={title} size="narrow" variant={alternateVariant(i + liqpayCorrection)}>
          <Wysiwyg content={text} />
        </Section>
      ))}
      {!!payment.crypto_payment_details.length && (
        <Section size='wide' title={t('Crypto')} variant={alternateVariant(liqpayCorrection + payment.payment_details.length)}>
          <Row align="center">
            {payment.crypto_payment_details.map(({ id, crypto_type, wallet }) => (
              <Col size={3} key={id}>
                <CryptoWallet type={crypto_type} wallet={wallet} />
              </Col>
            ))}
          </Row>
        </Section>
      )}
    </>
  )
}
