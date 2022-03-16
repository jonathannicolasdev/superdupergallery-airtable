import { json, LoaderFunction, useLoaderData } from 'remix'
import { gql } from '@urql/core'
import { graphcmsClient } from '~/lib'
import {
  AnimatedHeading,
  ArtworkList,
  Center,
  Hero,
  Layout,
} from '~/components'

export const loader: LoaderFunction = async () => {
  const queryArtworks = gql`
    query Artworks {
      artworks {
        id
        title
        slug
        images {
          url(transformation: { image: { resize: { width: 500 } } })
        }
        medium
        size
        date
        price
        artist {
          name
          username
        }
      }
    }
  `

  const response = await graphcmsClient.query(queryArtworks).toPromise()
  const { artworks } = response.data

  return json(artworks)
}

export default function Artworks() {
  const artworks = useLoaderData()

  return (
    <>
      <Hero>
        <AnimatedHeading sentence="Super Artworks for Your Eyes" />
      </Hero>

      <Center>
        <ArtworkList artworks={artworks} />
      </Center>
    </>
  )
}
