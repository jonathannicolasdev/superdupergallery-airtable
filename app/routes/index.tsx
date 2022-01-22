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
      <ul>
        {artworks.map((artwork: any) => {
          return <li key={artwork.id}>{artwork.fields.title}</li>
        })}
      </ul>
      <pre>{JSON.stringify(artworks)}</pre>
    </div>
  )
}
