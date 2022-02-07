import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      gray400: 'gainsboro',
      gray500: 'lightgray',
    },
  },
  media: {
    desktop: '(min-width: 768px)',
  },
})

globalCss({
  '::selection': {
    backgroundColor: '#A865C9',
  },
  ':-moz-focusring': {
    '@desktop': {
      outline: 'auto',
    },
  },
  ':focus': {
    '@desktop': {
      // outline: '$focusOutline solid 2px',
      outlineOffset: '2px',
    },
  },
  body: {
    color: '#ffffff',
    backgroundColor: '#101010',
    padding: '0',
    margin: '0',
    overflowX: 'hidden',
    boxSizing: 'border-box',
    fontFamily: `Helvetica, Arial, -apple-system, system-ui, sans-serif`,
  },
  a: {
    textDecoration: 'none',
    // color should be defined in Anchor/Link
  },
  button: { border: 'none' },
  img: { userSelect: 'none' },
  svg: { display: 'block' },
  'pre, code': {
    margin: 0,
    fontFamily: 'monospace',
  },
})()
