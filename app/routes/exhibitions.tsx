import { json, Link, useLoaderData } from 'remix'

import { airtableFetch } from '~/lib/airtable'
import { combineArtistData } from '~/utils/combine'

export async function loader() {
  const response = await airtableFetch(
    '/Exhibitions?maxRecords=10&view=All%20Exhibitions'
  )
  const exhibitions = response?.data?.records

  const newExhibitions = exhibitions.map((exhibition: any) => ({
    id: exhibition.id,
    createdTime: exhibition.createdTime,
    name: exhibition?.fields?.name,
    date: exhibition?.fields?.date,
    artists: combineArtistData(
      exhibition?.fields?.artistNames,
      exhibition?.fields?.artistUsernames
    ),
  }))

  return json(newExhibitions)
}

export default function Index() {
  const exhibitions = useLoaderData()

  return (
    <div>
      <h1>Exhibitions</h1>
      <hr />

      <div>
        {exhibitions?.map((exhibition: any) => {
          return (
            <div key={exhibition.id}>
              <h1>{exhibition.name}</h1>
              <time>{exhibition.date}</time>
              <ul>
                {exhibition.artists?.map((artist: any) => {
                  return (
                    <li>
                      <Link to={`/artists/${artist.username}`}>
                        {artist.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>

      <hr />
      <pre>{JSON.stringify(exhibitions, null, 2)}</pre>
    </div>
  )
}
