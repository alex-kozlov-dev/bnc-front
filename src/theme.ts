const montserrat = '"Montserrat", -apple-system, "Helvetica Neue", Arial, sans-serif'
const lato = '"Lato", -apple-system, "Helvetica Neue", Arial, sans-serif'

export const theme = {
  colors: {
    white: '#ffffff',
    gray: {
      0: '#f8f9fa',
      1: '#e9ecef',
      2: '#dee2e6',
      3: '#ced4da',
      4: '#adb5bd',
      5: '#6c757d',
      6: '#495057',
      7: '#343a40',
      8: '#212529'
    },
    yellow: '#ffd400',
    blue: '#00a6fb'
  },
  spacing: {
    xs: '8px',
    s: '16px',
    m: '24px',
    l: '32px'
  },
  sizes: {
    header: '80px'
  },
  shadow: {
    0: 'box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px;',
    1: 'box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px;',
    2: 'box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;',
    3: 'box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'
  },
  typography: {
    head: {
      3: {
        regular: `
          font-family: ${lato};
          font-size: 3em;
          line-height: 1.3;
          font-weight: 900;
        `,
        italic: `
          font-family: ${lato};
          font-size: 3em;
          line-height: 1.3;
          font-weight: 900;
          font-style: italic;
        `
      },
      5: {
        regular: `
          font-family: ${lato};
          font-size: 5em;
          line-height: 1.3;
          font-weight: 900;
        `,
        italic: `
          font-family: ${lato};
          font-size: 5em;
          line-height: 1.3;
          font-weight: 900;
          font-style: italic;
        `
      }
    },
    text: {
      0.8: {
        regular: `
          font-family: ${montserrat};
          font-size: 0.8em;
          line-height: 1.3;
        `
      },
      1: {
        regular: `
          font-family: ${montserrat};
          font-size: 1em;
          line-height: 1.8;
        `,
        bold: `
          font-family: ${montserrat};
          font-size: 1em;
          line-height: 1.8;
          font-weight: bold;
        `,
        italic: `
          font-family: ${montserrat};
          font-size: 1em;
          line-height: 1.8;
          font-style: italic;
        `
      }
    }
  },
  reset: {
    link: `
      color: inherit;
      text-decoration: none;
    `,
    button: `
      padding: 0;
      border: none;
      outline: none;
      background: 0;
      cursor: pointer;
    `,
    ul: `
      margin: 0;
      padding: 0;
    `,
    li: `
      list-style: none;
    `,
    h: `
      margin: 0;
    `
  }
}

export type Theme = typeof theme

type ThemeGetter<T = {}, O = T> = {
  [K in keyof O]: O[K] extends (string | number) ? (({ theme }: { theme: T }) => string | number) : ThemeGetter<T, O[K]>
}

const get = (obj: any, ...path: string[]): string | number => {
  const [key, ...rest] = path

  return rest.length ? get(obj[key], ...rest) : obj[key]
}

const createThemeGetter = <T = {}>(theme: T, parentPath: string[] = []): ThemeGetter<T> => {
  const getter: any = {}

  Object.keys(theme).forEach(key => {
    const path = [...parentPath, key]

    // @ts-ignore
    if (typeof theme[key] === 'string' || typeof theme[key] === 'number') {
      getter[key] = ({ theme }: { theme: T }) => get(theme, ...path)
    } else {
      // @ts-ignore
      getter[key] = createThemeGetter(theme[key], path)
    }
  })

  return getter as ThemeGetter<T>
}

export const t = createThemeGetter(theme)
