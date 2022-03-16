import { json, LoaderFunction, useLoaderData } from 'remix'
import { gql } from '@urql/core'
import { graphcmsClient } from '~/lib'

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
    <div>
      <h1>Artworks</h1>
      <div>
        {artworks.map((artwork: any) => {
          return (
            <div key={artwork.id}>
              <h1>{artwork.title}</h1>
              {artwork.images[0]?.url && (
                <img src={artwork.images[0].url} alt={artwork.title} />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
