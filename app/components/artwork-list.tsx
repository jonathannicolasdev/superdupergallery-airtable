import { parseISO } from 'date-fns'
import { styled } from '~/stitches'

import { Date, RemixLink } from '~/components'

import { ArtworkContent, ArtistContent } from '~/types'
import { FunctionComponent } from 'react'

type ArtworkListProps = {
  artist: ArtistContent
  artworks: any[]
}

type ArtworkItemProps = {
  artist: ArtistContent
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

const ArtworkItemLinkButton = styled('a', {
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
  artist,
  artworks,
}) => {
  return (
    <ArtworkListContainer>
      <ArtworkCollection>
        {/* <pre>{JSON.stringify(artworks, null, 2)}</pre> */}
        {artworks.map((artwork, index) => (
          <ArtworkItem key={index} artist={artist} artwork={artwork} />
        ))}
      </ArtworkCollection>
    </ArtworkListContainer>
  )
}

export const ArtworkItem = ({ artist, artwork }: ArtworkItemProps) => {
  return (
    <ArtworkItemContainer>
      <ArtworkItemSection>
        <ArtworkItemImage
          src={artwork.fields.images[0].url}
          alt={artwork.title}
        />
      </ArtworkItemSection>

      <ArtworkItemSection>
        <ArtworkTitle>{artwork.fields.title}</ArtworkTitle>
        <RemixLink to={`/artists/${artist.username}`}>
          <ArtistAnchor>{artist.name}</ArtistAnchor>
        </RemixLink>
        <Date date={parseISO(artwork.fields.date)} />
      </ArtworkItemSection>

      <ArtworkItemSection>
        <RemixLink to={'/artworks/' + artwork.fields.slug}>
          <ArtworkItemLinkButton>Details</ArtworkItemLinkButton>
        </RemixLink>
      </ArtworkItemSection>
    </ArtworkItemContainer>
  )
}
