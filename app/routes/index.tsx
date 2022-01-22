import { json, useLoaderData } from 'remix'

export function loader() {
  return json({
    message: 'Hello',
  })
}

export default function Index() {
  const data = useLoaderData()

  return (
    <div>
      <h1>Super Duper Gallery</h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  )
}
