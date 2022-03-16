import { json, LoaderFunction, useLoaderData } from 'remix'
import { Hero, AnimatedHeading, Center, ArtworkList } from '~/components'
import { airtableFetch } from '~/lib'
import { ArtistContent, ArtworkContent } from '~/types'

export const loader: LoaderFunction = async ({ params }) => {
  const allArtists = await airtableFetch('/Artists?view=All%20Artists')
  const allArtworks = await airtableFetch('/Artworks?view=All%20Artworks')

  const artist = allArtists?.data?.records.find((artist: any) => {
    if (params.username === artist.fields.username) {
      return artist
    }
  })

  const artworksByArtist = artist?.fields?.artworks.map((id: any) => {
    return allArtworks.data.records.filter((artwork: any) => {
      if (id === artwork.id) {
        return artwork
      }
    })
  })

  const { name, username } = artist.fields

  return json({
    artist: {
      name,
      username,
    },
    artworks: artworksByArtist.flat(),
  })
}

export default function ArtistUsernamePage() {
  const { artist, artworks } = useLoaderData()

  const url = `/allArtists/${artist.username}`
  const title = artist.name

  return (
    <div>
      <Hero>
        <AnimatedHeading sentence={artist.name} />
      </Hero>

      <Center>
        <ArtworkList artist={artist} artworks={artworks} />
      </Center>
    </div>
  )
}
