import { FunctionComponent } from 'react'
import { json, LoaderFunction, useLoaderData } from 'remix'
import { Hero, AnimatedHeading, Center } from '~/components'
import { airtableFetch } from '~/lib'
import { ArtistContent, ArtworkContent } from '~/types'

// export async function loader() {
//   const artists = await airtableFetch(
//     '/Artists?maxRecords=10&view=All%20Artists'
//   )

//   const transformedArtists = artists?.data?.records.map((artist: any) => {
//     const { name, username } = artist.fields
//     return {
//       name,
//       username,
//     }
//   })

//   console.log(transformedArtists)

//   return json(transformedArtists)
// }

export const loader: LoaderFunction = async ({ params }) => {
  const username = params.username

  return {
    username,
  }
}

export default function ArtistUsernamePage() {
  const data = useLoaderData()

  // const url = `/artists/${artist.username}`
  // const title = artist.name

  return (
    <div>
      <pre>{JSON.stringify(data)}</pre>

      <Hero>{/* <AnimatedHeading sentence={artist.name} /> */}</Hero>

      <Center>{/* <ArtworkList artworks={artworks} /> */}</Center>
    </div>
  )
}
