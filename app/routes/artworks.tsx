import { json, useLoaderData } from 'remix'
import { airtableFetch } from '~/lib/airtable'

export async function loader() {
  const artworks = await airtableFetch(
    '/Artworks?maxRecords=10&view=All%20Artworks'
  )

  return json(artworks?.data?.records)
}

export default function Artworks() {
  const artworks = useLoaderData()

  return (
    <div>
      <h1>Artworks</h1>
      <hr />

      <div>
        {artworks.map((artwork: any) => {
          const { title, images } = artwork.fields

          return (
            <div key={artwork.id}>
              <h1>{title}</h1>
              <img src={images[0]?.thumbnails?.large?.url} alt={title} />
            </div>
          )
        })}
      </div>

      <hr />
      <pre>{JSON.stringify(artworks, null, 2)}</pre>
    </div>
  )
}
