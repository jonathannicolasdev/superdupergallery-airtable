import { gql } from '@urql/core'
import { FunctionComponent } from 'react'
import { json, LoaderFunction, useLoaderData, useParams } from 'remix'
import { graphcmsClient } from '~/lib'

interface ArtworkSlugProps {}

export const loader: LoaderFunction = async ({ params }) => {
  const { artworkSlug } = params

  const queryArtworkBySlug = gql`
    query ArtworkBySlug($slug: String!) {
      artwork(where: { slug: $slug }) {
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

  const response = await graphcmsClient
    .query(queryArtworkBySlug, { slug: artworkSlug })
    .toPromise()
  const { artwork } = response.data

  return json({
    artwork,
  })
}

const ArtworkSlug: FunctionComponent<ArtworkSlugProps> = () => {
  const { artwork } = useLoaderData()

  return (
    <div>
      <pre>{JSON.stringify(artwork, null, 2)}</pre>
    </div>
  )
}

export default ArtworkSlug
