import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'src/components/Button'

type Data = {
  data: string;
  signature: string;
}

export const LiqpayButton = () => {
  const { t } = useTranslation()
  const [data, setData] = useState<Data | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/liqpay')
      return res.json()
    }

    fetchData().then(data => setData(data))
  }, [])

  return (
    <form
      method='POST'
      action='https://www.liqpay.ua/api/3/checkout'
      acceptCharset="utf-8"
    >
      {data && (
        <>
          <input name="data" type='hidden' value={data.data} />
          <input name="signature" type='hidden' value={data.signature} />
        </>
      )}
      <Button type="submit" disabled={!data}>
        {t('Donate with your card')}
      </Button>
    </form>
  )
}
