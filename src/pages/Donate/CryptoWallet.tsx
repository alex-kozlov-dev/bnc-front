import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CryptoType } from 'src/api/types'
import { Rhytm } from 'src/components/Rhytm'
import { Text } from 'src/components/Typography'
import { theme } from 'src/theme'
import styled from 'styled-components'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import QRCode from 'react-qr-code'

const QrOuter = styled.div`
  position: relative;
  cursor: pointer;
`

const CopiedOverlay = styled.div<{ visible: boolean }>`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 8px 24px;
  border-radius: 8px;
  background: ${theme.colors.gray[8]};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ visible }) => visible ? 1 : 0};
  transition: opacity 0.3s;
`

const Title = styled(Text).attrs({
  align: 'center',
  typography: theme.typography.head[1.5].regular
})`
  text-transform: capitalize;
`

const Wallet = styled(Text)`
  line-break: anywhere;
`

// eslint-disable-next-line
const prefixes: { [key in CryptoType]: string } = {
  btc: 'bitcoin',
  eth: 'etherium',
  ltc: 'litecoin',
  bch: 'bitcoincash',
  usdt: 'tether'
}

type Props = {
  type: CryptoType;
  wallet: string;
}

export const CryptoWallet = ({ type, wallet }: Props) => {
  const { t } = useTranslation()
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return

    const timeoutId = window.setTimeout(() => setCopied(false), 1000)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [copied])

  const link = useMemo(() => {
    const prefix = prefixes[type]

    if (!prefix || wallet.startsWith(`${prefix}:`)) return wallet

    return `${prefix}:${wallet}`
  }, [type, wallet])

  return (
    <CopyToClipboard text={wallet} onCopy={() => setCopied(true)}>
      <Rhytm title={t('click to copy')}>
        <Title>{type}</Title>
        <QrOuter>
          <QRCode value={link} size={220} bgColor="transparent" fgColor={theme.colors.gray[8]} />
          <CopiedOverlay visible={copied}>
            <Text typography={theme.typography.head['1.5'].regular}>{t('Copied')}</Text>
          </CopiedOverlay>
        </QrOuter>
        <Wallet>{wallet}</Wallet>
      </Rhytm>
    </CopyToClipboard>
  )
}
