import { lorem, loremUk } from './lorem'

const makeMock = <T extends any>(fn: (lorem: (words?: number) => string) => T): Record<string, T> => {
  return {
    en: fn(lorem),
    uk: fn(loremUk)
  }
}

export const mock = makeMock(lorem => ({
  socialLinks: {
    items: [
      { type: 'facebook', url: '#' },
      { type: 'instagram', url: '#' },
      { type: 'telegram', url: '#' }
    ]
  },
  footer: {
    text: lorem(15)
  },
  home: {
    splash: {
      title: lorem(4),
      text: lorem(15)
    },
    iconTextList: {
      items: [
        {
          icon: 'fa-biohazard',
          title: lorem(4),
          text: lorem(20)
        },
        {
          icon: 'fa-broadcast-tower',
          title: lorem(5),
          text: lorem(20)
        },
        {
          icon: 'fa-bus',
          title: lorem(4),
          text: lorem(20)
        }
      ]
    },
    textImage: {
      title: lorem(3),
      text: lorem(),
      imageUrl: 'https://www.fillmurray.com/1024/768',
      imageAlt: lorem(2)
    },
    numberedList: {
      items: [
        { text: lorem(20) },
        { text: lorem(20) },
        { text: lorem(20) },
        { text: lorem(20) }
      ]
    },
    donateCTA: {
      cta: lorem(7)
    },
    text: {
      title: lorem(3),
      text: lorem()
    },
    partners: {
      items: [
        {
          imageUrl: 'https://savelife.in.ua/templates/site/img/kiis.png',
          alt: 'kiis'
        },
        {
          imageUrl: 'https://savelife.in.ua/templates/site/img/agama.png',
          alt: 'agama'
        },
        {
          imageUrl: 'https://savelife.in.ua/templates/site/img/kiis.png',
          alt: 'kiis'
        },
        {
          imageUrl: 'https://savelife.in.ua/templates/site/img/agama.png',
          alt: 'agama'
        }
      ]
    },
    qa: {
      items: [
        {
          question: `${lorem(4)}?`,
          answer: lorem()
        },
        {
          question: `${lorem(4)}?`,
          answer: lorem()
        },
        {
          question: `${lorem(4)}?`,
          answer: lorem()
        },
        {
          question: `${lorem(4)}?`,
          answer: lorem()
        }
      ]
    }
  },
  projects: {
    items: [
      {
        title: lorem(4),
        summary: lorem(20),
        text: lorem(),
        imageUrl: 'https://www.fillmurray.com/500/500',
        slug: 'proj-1'
      },
      {
        title: lorem(4),
        summary: lorem(20),
        text: lorem(),
        imageUrl: 'https://www.fillmurray.com/500/501',
        slug: 'proj-2'
      },
      {
        title: lorem(4),
        summary: lorem(20),
        text: lorem(),
        imageUrl: 'https://www.fillmurray.com/500/502',
        slug: 'proj-3'
      },
      {
        title: lorem(4),
        summary: lorem(20),
        text: lorem(),
        imageUrl: 'https://www.fillmurray.com/500/503',
        slug: 'proj-4'
      }
    ]
  }
}))
