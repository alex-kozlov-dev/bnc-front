import { t } from 'src/theme'
import styled, { css } from 'styled-components'

const variants = {
  primary: css`
    color: ${t.colors.white};
    background: ${t.colors.gray[8]};

    &:hover {
      color: ${t.colors.yellow};
      background: ${t.colors.blue};
    }
  `
}

type Variant = keyof typeof variants

export const Button = styled.button<{ variant?: Variant }>`
  ${t.reset.button}
  ${t.typography.text[1].bold}
  padding: ${t.spacing.xs} ${t.spacing.m};
  border-radius: 8px;
  transition: color 0.2s, background 0.2s, box-shadow 0.2s;

  ${({ variant = 'primary' }) => variants[variant]}

  ${t.shadow[0]}
  &:active {
    ${t.shadow[3]}
  }
`
