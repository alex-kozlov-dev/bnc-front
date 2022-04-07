import { NextApiHandler } from 'next'
import crypto from 'crypto'

const SECRET = process.env.SECRET || crypto.randomBytes(16).toString('hex')

const preview: NextApiHandler = (req, res) => {
  if (req.query.secret !== SECRET) {
    res.status(401)
    return
  }

  res.setPreviewData({})
  res.redirect('/')
}

export default preview
