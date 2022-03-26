import styled from 'styled-components'

const I = styled.i`
  transition: transform 0.2s;
`

type Props = {
  prefix?: 'fas' | 'fab';
  icon: string;
  size?: 'xs' | 'sm' | 'lg' | '2x' | '3x' | '4x';
  rotate?: 0 | 90 | 180 | 270;
  className?: string;
}

export const Icon = ({ prefix = 'fas', icon, size, rotate, className }: Props) => {
  return <I className={`${prefix || ''} ${icon} ${size && `fa-${size}`} ${rotate && `fa-rotate-${rotate}`} ${className || ''}`} />
}
