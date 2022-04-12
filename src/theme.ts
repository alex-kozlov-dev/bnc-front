const raleway = '"Raleway", -apple-system, "Helvetica Neue", Arial, sans-serif'
const montserat = '"Montserat", -apple-system, "Helvetica Neue", Arial, sans-serif'

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
    l: '32px',
    xl: '48px',
    xxl: '64px'
  },
  sizes: {
    topHeader: '36px',
    header: '80px',
    content: {
      wide: '1024px',
      narrow: '728px'
    }
  },
  borderRadius: {
    s: '4px',
    m: '8px',
    l: '16px'
  },
  shadow: {
    0: 'box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px;',
    1: 'box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px;',
    2: 'box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;',
    3: 'box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'
  },
  typography: {
    head: {
      1.5: {
        regular: `
          font-family: ${montserat};
          font-size: 1.5em;
          line-height: 1;
          font-weight: 900;
        `,
        italic: `
          font-family: ${montserat};
          font-size: 1.5em;
          line-height: 1;
          font-weight: 900;
          font-style: italic;
        `
      },
      2: {
        regular: `
          font-family: ${montserat};
          font-size: 2em;
          line-height: 1;
          font-weight: 900;
        `,
        italic: `
          font-family: ${montserat};
          font-size: 2em;
          line-height: 1;
          font-weight: 900;
          font-style: italic;
        `
      },
      2.5: {
        regular: `
          font-family: ${montserat};
          font-size: 2.5em;
          line-height: 1;
          font-weight: 900;
        `,
        italic: `
          font-family: ${montserat};
          font-size: 2.5em;
          line-height: 1;
          font-weight: 900;
          font-style: italic;
        `
      },
      5: {
        regular: `
          font-family: ${montserat};
          font-size: 5em;
          line-height: 1;
          font-weight: 900;
        `,
        italic: `
          font-family: ${montserat};
          font-size: 5em;
          line-height: 1;
          font-weight: 900;
          font-style: italic;
        `
      }
    },
    text: {
      0.8: {
        regular: `
          font-family: ${raleway};
          font-size: 0.8em;
          line-height: 1.3;
        `
      },
      1: {
        regular: `
          font-family: ${raleway};
          font-size: 1em;
          line-height: 1.6;
        `,
        bold: `
          font-family: ${raleway};
          font-size: 1em;
          line-height: 1.6;
          font-weight: bold;
        `,
        italic: `
          font-family: ${raleway};
          font-size: 1em;
          line-height: 1.6;
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
    text: `
      margin: 0;
    `,
    input: `
      background: none;
      border: none;
      outline: none;
    `
  }
}
