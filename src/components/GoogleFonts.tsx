import { useState } from 'react'

type Font = {
  family: string;
  styles?: {
    weight: number;
    italic?: boolean;
  }[];
}

const createFamilyString = ({ family, styles }: Font) => {
  let familyString = `family=${family.replace(/\s/g, '+')}`

  if (!styles?.length) return familyString

  familyString += ':ital,wght@'

  familyString += styles.map(({ weight, italic = false }) => `${+!!italic},${weight}`).join(';')

  return familyString
}

type Props = {
  families: Font[];
}

export const GoogleFonts = ({ families }: Props) => {
  const [link] = useState(() => {
    return `https://fonts.googleapis.com/css2?${families.map(createFamilyString).join('&')}&display=block`
  })

  return (
    <link href={link} rel="stylesheet" />
  )
}
