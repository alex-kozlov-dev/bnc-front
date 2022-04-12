import { SMTPClient } from 'emailjs'
import { NextApiHandler } from 'next'

const client = new SMTPClient({
  host: process.env.FEEDBACK_SMTP_HOST,
  ssl: true,
  port: +(process.env.FEEDBACK_SMTP_PORT || '465'),
  user: process.env.FEEDBACK_SMTP_USER,
  password: process.env.FEEDBACK_SMTP_PASSWORD
})

const feedback: NextApiHandler = async (req, res) => {
  try {
    const { email, message } = req.body

    if (!email || !message) throw new Error('empty request')

    await client.sendAsync({
      from: process.env.FEEDBACK_SMTP_USER!,
      to: process.env.FEEDBACK_SMTP_DESTINATION!,
      subject: '✉️ FEEDBACK MESSAGE ✉️',
      text: `Email: ${email}\n\nMessage:\n${message}`
    })

    res.redirect(302, '/contacts?status=success')
  } catch (e) {
    console.error(e)
    res.redirect(302, '/contacts?status=error')
  }
}

export default feedback
