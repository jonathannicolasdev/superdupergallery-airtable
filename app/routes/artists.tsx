import { json, useLoaderData } from 'remix'
import { airtableFetch, graphcmsClient } from '~/lib'
import { ArtistContent } from '~/types'
import { Hero, AnimatedHeading, ArtistList, Center } from '~/components'
import { gql } from '@urql/core'

export async function loader() {
  const queryArtists = gql`
    query Artists {
      artists {
        id
        name
        username
      }
    }
  `

  const response = await graphcmsClient.query(queryArtists).toPromise()
  const { artists } = response.data

  return json(artists)
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
