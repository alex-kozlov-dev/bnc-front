import { NextApiHandler } from 'next'
import { v4 as uuid } from 'uuid'
import crypto from 'crypto'

const publicKey = process.env.LIQPAY_PUBLIC_KEY
const privateKey = process.env.LIQPAY_PRIVATE_KEY

const utf8_to_b64 = (str: string) => {
  return Buffer.from(str).toString('base64')
}

const liqpay: NextApiHandler = async (req, res) => {
  try {
    const json = {
      public_key: publicKey,
      version: '3',
      action: 'paydonate',
      amount: '100',
      currency: 'UAH',
      description: 'Благодійний внесок на статутну діяльність',
      order_id: uuid()
    }

    const data = utf8_to_b64(JSON.stringify(json))
    const signString = privateKey + data + privateKey
    const sha1 = crypto.createHash('sha1')
    sha1.update(signString)
    const signature = sha1.digest('base64')

    res.send({
      data,
      signature
    })
  } catch (e) {
    console.error(e)
    res.status(500)
  }
}

export default liqpay
