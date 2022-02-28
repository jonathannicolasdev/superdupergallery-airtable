import { FunctionComponent } from 'react'
import { Link } from 'remix'
import { styled } from '~/stitches'

import { ArtistContent } from '~/types'

const ArtistListContainer = styled('div', {
  maxWidth: '720px',
})

const ArtistCollection = styled('ul', {
  listStyle: 'none',
  fontSize: '1.2rem',
  a: {
    textDecoration: 'none',
    color: 'white',
    padding: '0.2em 0',
    borderWidth: '5px 0',
    '@desktop': {
      border: '0px solid black',
    },
    '&:hover': {
      borderBottom: '5px solid red',
    },
  },
  columnCount: 2,
  '@desktop': {
    columnCount: 3,
  },
})

const ArtistItem = styled('li', {
  marginBottom: '1em',
})

interface ArtistListProps {
  artists: ArtistContent[]
}

export const ArtistList: FunctionComponent<ArtistListProps> = ({ artists }) => {
  return (
    <ArtistListContainer>
      <ArtistCollection>
        {artists.map((artist) => (
          <ArtistItem key={artist.username}>
            <Link to={`/artists/${artist.username}`}>{artist.name}</Link>
          </ArtistItem>
        ))}
      </ArtistCollection>
    </ArtistListContainer>
  )
}

export default ArtistList
