import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Meta } from 'src/api/types'
import { Button } from 'src/components/Button'
import { Col, Row } from 'src/components/Grid'
import { Rhytm } from 'src/components/Rhytm'
import { Section } from 'src/components/Section'
import { Wysiwyg } from 'src/components/Wysiwyg'
import { theme } from 'src/theme'
import styled from 'styled-components'

const Anchor = styled.a`
  ${theme.reset.link}
  display: block;
  transition: color 0.2s;
  cursor: pointer;
  &:hover {
    color: ${theme.colors.blue};
  }
`

const Form = styled.form`
  display: block;
`

const Input = styled.input`
  ${theme.reset.input}
  ${theme.typography.text[1].regular}
  box-sizing: border-box;
  padding: ${theme.spacing.xs} ${theme.spacing.s};
  display: block;
  width: 100%;
  border: 1px solid ${theme.colors.gray[1]};
  border-radius: 8px;
  margin-top: ${theme.spacing.xs};
  margin-bottom: ${theme.spacing.m};

  transition: border-color 0.2s;

  &:hover {
    border-color: ${theme.colors.gray[3]};
  }

  &:focus {
    border-color: ${theme.colors.blue};
  }
`

const Status = styled.div<{ success: boolean }>`
  ${theme.typography.text[1].bold}
  color: ${({ success }) => success ? theme.colors.blue : '#DA1212'};
  margin-top: ${theme.spacing.s};
`

const sanitazeTel = (str: string) => str.replace(/[^\d+]/g, '')

const useFeedbackStatus = () => {
  const [status, setStatus] = useState<'success' | 'error'>()
  const router = useRouter()

  useEffect(() => {
    if (router.query.status) {
      setStatus(router.query.status as any)
      router.replace('/contacts', undefined, { shallow: true })
    }
  }, [router])

  return status
}

export type ContactsPageProps = {
  meta: Meta;
}

export const ContactsPage = ({ meta }: ContactsPageProps) => {
  const { t } = useTranslation()

  const status = useFeedbackStatus()

  return (
    <Section size="wide" title={t('Contacts')}>
      <Row>
        <Col size={6}>
          <Form action='/api/feedback' method='POST'>
            <label htmlFor='email'>Email</label>
            <Input name='email' type='email' placeholder="email@address.com" required />
            <label htmlFor='message'>Message</label>
            <Input as='textarea' name='message' placeholder="Your message..." required />
            <Button type='submit'>
              {t('Send message')}
            </Button>
            {status && (
              <Status success={status === 'success'}>
                {status === 'success' ? t('Thank you for feedback!') : t('Something gone wrong. Try again later')}
              </Status>
            )}
          </Form>
        </Col>
        <Col size={6}>
          <Rhytm>
            <Anchor href={`tel:${sanitazeTel(meta.phone_number)}`}>{meta.phone_number}</Anchor>
            <Anchor href={`mailto:${meta.email}`}>{meta.email}</Anchor>
            <Wysiwyg content={meta.address} />
          </Rhytm>
        </Col>
      </Row>
    </Section>
  )
}
