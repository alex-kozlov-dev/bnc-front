import { NextApiHandler } from 'next'

const exit: NextApiHandler = (req, res) => {
  res.clearPreviewData()
  res.redirect('/')
}

export default exit
