import { Link } from 'remix'
import { styled } from '~/stitches'

export const CenterContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
})

export const Article = styled('article', {
  color: 'white',
  margin: '1em 0',
  padding: '1em 0',
  fontSize: '1.2rem',
  p: {
    lineHeight: '150%',
    marginBottom: '1em',
  },
  maxWidth: '720px',
  variants: {
    size: {
      wide: { maxWidth: '1080px' },
      compact: { maxWidth: '720px' },
    },
  },
})

export const ArticleHeading = styled('h3', {
  textTransform: 'uppercase',
  fontWeight: 900,
  fontSize: '2rem',
  maxWidth: '24ch',
})

export const Section = styled('section', {
  marginBottom: '1.5em',
  variants: {
    align: {
      center: {
        display: 'flex',
        justifyContent: 'center',
      },
    },
  },
})

export const CoverImage = styled('img', {
  backgroundImage: 'url("/images/homepage-cover.jpeg")',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  // backgroundAttachment: 'fixed',
  width: '100%',
  height: '200px',
  '@desktop': {
    height: '600px',
  },
})

export const MapAnchor = styled('a', {
  display: 'block',
  cursor: 'pointer',
  textDecoration: 'none',
  width: '100%',
  maxWidth: '1000px',
})

export const MapImage = styled('img', {
  backgroundImage: 'url("/images/map.png")',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'top center',
  backgroundSize: 'cover',
  width: '100%',
  maxWidth: '1000px',
  height: '200px',
  transition: 'all 0.25s ease-in-out',
  '@desktop': {
    height: '300px',
  },
  '&:hover': {
    filter: 'brightness(1.2)',
  },
})
