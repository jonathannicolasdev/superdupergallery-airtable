import { parseISO } from 'date-fns'
import { styled } from '~/stitches'

import { Date, RemixLink } from '~/components'
import { Link } from 'remix'

import { ArtworkContent, ArtistContent } from '~/types'
import { FunctionComponent } from 'react'

type ArtworkListProps = {
  artworks: any[]
}

type ArtworkItemProps = {
  artwork: any
}

const ArtworkListContainer = styled('div', {})

const ArtworkCollection = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'flex-start',
})

const ArtworkItemContainer = styled('article', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  fontSize: '1.2rem',
  margin: '1em',
  maxWidth: '200px',
  height: '100%',
  '*': {
    display: 'block',
  },
})

const ArtworkItemImage = styled('img', {
  height: '100%',
  width: '100%',
})

const ArtworkItemSection = styled('section', {
  maxWidth: '300px',
  margin: '0.5em',
})

const ArtworkTitle = styled('h3', {
  fontSize: '1.5rem',
})

const ArtworkItemLinkButton = styled(Link, {
  cursor: 'pointer',
  color: 'white',
  border: '2px solid white',
  padding: '0.5em 1em',
  transition: 'all 0.25s ease-in-out',
  textDecoration: 'none',
  '&:hover': {
    backgroundColor: 'white',
    color: 'black',
  },
})

const ArtistAnchor = styled('a', {
  color: 'white',
  textDecoration: 'none',
  paddingBottom: '2px',
  border: '0px solid black',
  borderWidth: '5px 0',
  '&:hover': {
    borderBottom: '5px solid red',
  },
})

export const ArtworkList: FunctionComponent<ArtworkListProps> = ({
  artworks,
}) => {
  return (
    <ArtworkListContainer>
      <ArtworkCollection>
        {artworks.map((artwork, index) => (
          <ArtworkItem key={index} artwork={artwork} />
        ))}
      </ArtworkCollection>
    </ArtworkListContainer>
  )
}

export const ArtworkItem = ({ artwork }: ArtworkItemProps) => {
  console.log(artwork.images[0]?.url)

  return (
    <ArtworkItemContainer>
      <ArtworkItemSection>
        {artwork.images.map((image: any) => {
          return <ArtworkItemImage src={image.url} alt={artwork.title} />
        })}
      </ArtworkItemSection>

      <ArtworkItemSection>
        <ArtworkTitle>{artwork.title}</ArtworkTitle>
        <RemixLink to={`/artists/${artwork.artist?.username}`}>
          <ArtistAnchor>{artwork.artist?.name}</ArtistAnchor>
        </RemixLink>
        <Date date={parseISO(artwork.date)} />
      </ArtworkItemSection>

      <ArtworkItemSection>
        <ArtworkItemLinkButton to={'/artworks/' + artwork.slug}>
          Details
        </ArtworkItemLinkButton>
      </ArtworkItemSection>
    </ArtworkItemContainer>
  )
}
