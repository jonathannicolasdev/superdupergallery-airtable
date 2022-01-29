import { json, useLoaderData } from 'remix'
import { airtableFetch } from '~/lib/airtable'

export async function loader() {
  const exhibitions = await airtableFetch(
    '/Exhibitions?maxRecords=10&view=All%20Exhibitions'
  )

  return json(exhibitions?.data?.records)
}

export default function Index() {
  const exhibitions = useLoaderData()

  return (
    <div>
      <h1>Exhibitions</h1>
      <hr />

      <div>
        {exhibitions.map((exhibition: any) => {
          // const { name } = exhibition.fields

          return <div key={exhibition.id}>{/* <h1>{name}</h1> */}</div>
        })}
      </div>

      <hr />
      <pre>{JSON.stringify(exhibitions, null, 2)}</pre>
    </div>
  )
}
