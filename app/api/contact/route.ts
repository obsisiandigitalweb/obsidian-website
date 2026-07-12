import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT || 465),
  secure: process.env.MAIL_SECURE === 'true',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
})

type ContactPayload = {
  name: string
  email: string
  country: string
  phone: string
  message: string
}

function buildMessage(payload: ContactPayload) {
  return `New contact form submission from your website:\n\nName: ${payload.name}\nEmail: ${payload.email}\nCountry: ${payload.country}\nPhone: ${payload.phone}\nMessage:\n${payload.message}`
}

export async function POST(request: Request) {
  const mailTo = process.env.MAIL_TO || 'obsidian.digitalweb@gmail.com'
  const mailFrom = process.env.MAIL_FROM || process.env.MAIL_USER

  if (!mailFrom || !process.env.MAIL_USER || !process.env.MAIL_PASS || !process.env.MAIL_HOST || !process.env.MAIL_PORT) {
    return NextResponse.json({ error: 'Mail server not configured.' }, { status: 500 })
  }

  let payload: ContactPayload
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const { name, email, country, phone, message } = payload
  if (!name || !email || !country || !phone || !message) {
    return NextResponse.json({ error: 'Please fill in all fields.' }, { status: 400 })
  }

  try {
    await transporter.sendMail({
      from: `"Obsidian Website" <${mailFrom}>`,
      to: mailTo,
      subject: `New contact request from ${name}`,
      text: buildMessage(payload),
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Country:</strong> ${country}</p><p><strong>Phone:</strong> ${phone}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br>')}</p>`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Mail send error:', error)
    return NextResponse.json({ error: 'Unable to send email.' }, { status: 500 })
  }
}
