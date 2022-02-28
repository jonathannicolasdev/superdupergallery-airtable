import { json, useLoaderData } from 'remix'
import { airtableFetch } from '~/lib/airtable'
import { ArtistContent } from '~/types'
import { Hero, AnimatedHeading, ArtistList, Center } from '~/components'

export async function loader() {
  const artists = await airtableFetch(
    '/Artists?maxRecords=10&view=All%20Artists'
  )

  const transformedArtists = artists?.data?.records.map((artist: any) => {
    const { name, username } = artist.fields
    return {
      name,
      username,
    }
  })

  return json(transformedArtists)
}

export default function Artists() {
  const artists = useLoaderData<ArtistContent[]>()

  return (
    <div>
      <Hero>
        <AnimatedHeading sentence="The Amazing Artists" />
      </Hero>

      <Center>
        <ArtistList artists={artists} />
      </Center>
    </div>
  )
}
