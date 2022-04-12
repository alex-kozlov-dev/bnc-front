import { useTranslation } from 'react-i18next'
import { File } from 'src/api/types'
import { Icon } from 'src/components/Icon'
import { Rhytm } from 'src/components/Rhytm'
import { Section } from 'src/components/Section'
import { theme } from 'src/theme'
import styled from 'styled-components'

const FileContainer = styled.a`
  ${theme.reset.link}
  ${theme.typography.text[1].regular}
  ${theme.shadow[0]}
  display: block;
  border: 1px solid ${theme.colors.gray[1]};
  transition: all 0.2s;
  padding: ${theme.spacing.s} ${theme.spacing.m};
  border-radius: 8px;

  &:hover {
    border-color: ${theme.colors.gray[3]};
    ${theme.shadow[1]}
  }
`

const FileIcon = styled(Icon).attrs({ icon: 'fa-file' })`
  margin-right: 1em;
`

export type DocumentsPageProps = {
  files: File[]
}

export const DocumentsPage = ({ files }: DocumentsPageProps) => {
  const { t } = useTranslation()
  return (
    <Section size="narrow" title={t('Documents')}>
      <Rhytm>
        {files.map(file => (
          <FileContainer key={file.id} href={file.src} target="_blank" download>
            <FileIcon /> {file.title}
          </FileContainer>
        ))}
      </Rhytm>
    </Section>
  )
}
