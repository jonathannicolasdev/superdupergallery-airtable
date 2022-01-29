import { json, useLoaderData } from 'remix'
import { airtableFetch } from '~/lib/airtable'

export async function loader() {
  const artists = await airtableFetch(
    '/Artists?maxRecords=10&view=All%20Artists'
  )

  return json(artists?.data?.records)
}

export default function Index() {
  const artists = useLoaderData()

  return (
    <div>
      <h1>Artists</h1>
      <hr />

      <div>
        {artists.map((artist: any) => {
          const { name, username } = artist.fields

          return (
            <div key={artist.id}>
              <h1>{name}</h1> ({username})
            </div>
          )
        })}
      </div>

      <hr />
      <pre>{JSON.stringify(artists, null, 2)}</pre>
    </div>
  )
}
