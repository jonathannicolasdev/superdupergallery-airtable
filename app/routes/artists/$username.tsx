import { json, LoaderFunction, useLoaderData } from 'remix'
import { Hero, AnimatedHeading, Center } from '~/components'
import { airtableFetch } from '~/lib'
import { ArtistContent, ArtworkContent } from '~/types'

export const loader: LoaderFunction = async ({ params }) => {
  const artists = await airtableFetch(
    '/Artists?maxRecords=10&view=All%20Artists'
  )
  const artist = artists?.data?.records.find((artist: any) => {
    if (params.username === artist.fields.username) {
      return artist
    }
  })
  const { name, username } = artist.fields

  return json({
    artist: {
      name,
      username,
    },
    artworks: [],
  })
}

export default function ArtistUsernamePage() {
  const { artist } = useLoaderData()

  const url = `/artists/${artist.username}`
  const title = artist.name

  return (
    <div>
      <Hero>
        <AnimatedHeading sentence={artist.name} />
      </Hero>

      <Center>{/* <ArtworkList artworks={artworks} /> */}</Center>
    </div>
  )
}
