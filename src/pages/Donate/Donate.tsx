import { useTranslation } from 'react-i18next'
import { Payment } from 'src/api/types'
import { Col, Row } from 'src/components/Grid'
import { PageTitle } from 'src/components/PageTitle'
import { alternateVariant, DeprecatedSection } from 'src/components/Section'
import { Wysiwyg } from 'src/components/Wysiwyg'
import styled from 'styled-components'
import { CryptoWallet } from './CryptoWallet'
import { LiqpayButton } from './LiqpayButton'

const LiqpaySection = styled(DeprecatedSection)`
  text-align: center;
`

export type DonatePageProps = {
  payment: Payment;
  liqpayEnabled: boolean;
}

export const DonatePage = ({ payment, liqpayEnabled }: DonatePageProps) => {
  const { t } = useTranslation()

  const liqpayCorrection = +!!liqpayEnabled

  return (
    <>
      <PageTitle title={t('Donate')} />
      {liqpayEnabled && (
        <LiqpaySection title={t('Visa/Mastercard')}>
          <LiqpayButton />
        </LiqpaySection>
      )}
      {payment.payment_details.map(({ id, title, text }, i) => (
        <DeprecatedSection key={id} title={title} size="narrow" variant={alternateVariant(i + liqpayCorrection)}>
          <Wysiwyg content={text} />
        </DeprecatedSection>
      ))}
      {!!payment.crypto_payment_details.length && (
        <DeprecatedSection size='wide' title={t('Crypto')} variant={alternateVariant(liqpayCorrection + payment.payment_details.length)}>
          <Row align="center" justify="center">
            {payment.crypto_payment_details.map(({ id, crypto_type, wallet }) => (
              <Col size={{ desktop: 3, tablet: 4, mobile: 12 }} key={id}>
                <CryptoWallet type={crypto_type} wallet={wallet} />
              </Col>
            ))}
          </Row>
        </DeprecatedSection>
      )}
    </>
  )
}
