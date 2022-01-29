import { json, useLoaderData } from 'remix'

import { airtableFetch } from '~/lib/airtable'
import { combineArtistData } from '~/utils/combine'

export async function loader() {
  const response = await airtableFetch(
    '/Exhibitions?maxRecords=10&view=All%20Exhibitions'
  )

  const exhibitions = response?.data?.records

  const arrayOfObjects = combineArtistData(
    exhibitions[0]?.fields?.artistNames,
    exhibitions[0]?.fields?.artistUsernames
  )

  console.log(arrayOfObjects)

  return json(exhibitions)
}

export default function Index() {
  const exhibitions = useLoaderData()

  return (
    <div>
      <h1>Exhibitions</h1>
      <hr />

      <div>
        {exhibitions?.map((exhibition: any) => {
          const { name, date, artistNames, artistUsernames, artworkNames } =
            exhibition.fields

          return (
            <div key={exhibition.id}>
              <h1>{name}</h1>
              <time>{date}</time>
              <ul>
                {artistNames?.map((name: any) => {
                  return <li>{name}</li>
                })}
              </ul>
              <ul>
                {artistUsernames?.map((username: any) => {
                  return <li>{username}</li>
                })}
              </ul>
              <ul>
                {artworkNames?.map((artwork: any) => {
                  return <li>{artwork}</li>
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
