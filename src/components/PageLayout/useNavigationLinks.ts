import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Meta } from 'src/api/types'
import { isTruthy } from 'src/utils'

export const useNavigationLinks = (meta: Meta, footer = false) => {
  const { t } = useTranslation()

  return useMemo(() => [
    { title: t('Home'), href: '/' },
    meta.posts_exists && { title: t('Our work'), href: '/our-work' },
    meta.files_exists && { title: t('Documents'), href: '/documents' },
    { title: t('Contacts'), href: '/contacts' },
    footer && meta.terms_of_use_enabled && { title: t('Terms of use'), href: '/terms-of-use' },
    footer && meta.privacy_policy_enabled && { title: t('Privacy policy'), href: '/privacy-policy' }
  ].filter(isTruthy), [footer, meta.files_exists, meta.posts_exists, meta.privacy_policy_enabled, meta.terms_of_use_enabled, t])
}
