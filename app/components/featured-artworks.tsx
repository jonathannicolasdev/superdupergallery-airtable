import { FunctionComponent } from 'react'
import { Link } from 'remix'
import { styled } from '~/stitches'

export const FeaturedArtworksContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '2rem',
  justifyContent: 'center',
  alignItems: 'center',
})

export const FeaturedArtworkImage = styled('img', {
  maxHeight: '300px',
  objectFit: 'contain',
})

interface FeaturedArtworksProps {
  artworks: {
    title: string
    url: string
  }[]
}

export const FeaturedArtworks: FunctionComponent<FeaturedArtworksProps> = ({
  artworks,
}) => {
  return (
    <FeaturedArtworksContainer>
      {artworks.map((artwork, index) => {
        return (
          <FeaturedArtworkImage
            key={index}
            alt={artwork.title}
            src={artwork.url}
          />
        )
        // if (artwork.slug) {
        //   return (
        //     <Link key={index} to={artwork.slug}>
        //       <FeaturedArtworkImage key={index} url={artwork.url} alt={artwork.title} />
        //     </Link>
        //   )
        // } else {
        //   return (
        //     <FeaturedArtworkImage key={index} url={artwork.url} alt={artwork.title} />
        //   )
        // }
      })}
    </FeaturedArtworksContainer>
  )
}
