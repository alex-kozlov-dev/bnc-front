import { theme } from 'src/theme'
import styled, { css } from 'styled-components'

const variants = {
  primary: css`
    color: ${theme.colors.white};
    background: ${theme.colors.gray[8]};

    &:hover {
      color: ${theme.colors.yellow};
      background: ${theme.colors.blue};
    }
  `,
  'primary-inverse': css`
    color: ${theme.colors.gray[8]};
    background: ${theme.colors.white};

    &:hover {
      color: ${theme.colors.yellow};
      background: ${theme.colors.blue};
    }
  `
}

type Variant = keyof typeof variants

export const Button = styled.button<{ variant?: Variant }>`
  ${theme.reset.link}
  ${theme.reset.button}
  ${theme.typography.text[1].bold}
  display: inline-block;
  padding: ${theme.spacing.xs} ${theme.spacing.m};
  border-radius: 8px;
  transition: color 0.2s, background 0.2s, box-shadow 0.2s;
  white-space: nowrap;

  ${({ variant = 'primary' }) => variants[variant]}

  ${theme.shadow[0]}
  &:active {
    ${theme.shadow[3]}
  }
`
