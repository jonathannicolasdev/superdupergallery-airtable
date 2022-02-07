import { json, useLoaderData } from 'remix'
import { airtableFetch } from '~/lib/airtable'

export async function loader() {
  const artworks = await airtableFetch(
    '/Artworks?maxRecords=3&view=All%20Artworks'
  )

  return json(artworks?.data?.records)
}

export default function Index() {
  const artworks = useLoaderData()

  return (
    <div>
      <h1>Super Duper Gallery</h1>
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
    </div>
  )
}
