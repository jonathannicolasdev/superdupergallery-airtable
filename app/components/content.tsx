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
  backgroundImage: 'url("/images/cover.jpeg")',
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

export const FeaturedArtworksContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1em',
  justifyContent: 'center',
  alignItems: 'center',
})

export const FeaturedArtwork = styled('img', {
  width: '300px',
  height: '300px',
})

export const FeaturedArtworks = () => {
  const images = [
    {
      name: 'Featured A',
      src: '/images/featured-a.jpeg',
    },
    {
      name: 'Featured B',
      src: '/images/featured-b.jpeg',
    },
    {
      name: 'Featured C',
      src: '/images/featured-c.jpeg',
      url: '/artworks/corrupted-alburoto',
    },
  ]

  return (
    <FeaturedArtworksContainer>
      {images.map((image, index) => {
        if (image.url) {
          return (
            <Link key={index} to={image.url}>
              <FeaturedArtwork key={index} src={image.src} alt={image.name} />
            </Link>
          )
        } else {
          return (
            <FeaturedArtwork key={index} src={image.src} alt={image.name} />
          )
        }
      })}
    </FeaturedArtworksContainer>
  )
}
