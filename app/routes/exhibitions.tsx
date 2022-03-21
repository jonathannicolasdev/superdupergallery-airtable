import { gql } from '@urql/core'
import { json, Link, useLoaderData } from 'remix'
import {
  AnimatedHeading,
  Center,
  ExhibitionList,
  Hero,
  Layout,
} from '~/components'

import { graphcmsClient } from '~/lib'

export async function loader() {
  const queryExhibitions = gql`
    query Exhibitions {
      exhibitions {
        id
        slug
        name
        date
        coverImage {
          url(transformation: { image: { resize: { width: 500 } } })
        }
        artists {
          id
          username
          name
        }
        artworks {
          id
          slug
          title
          images {
            url(transformation: { image: { resize: { width: 500 } } })
          }
        }
      }
    }
  `

  const response = await graphcmsClient.query(queryExhibitions).toPromise()
  const { exhibitions } = response.data

  return json(exhibitions)
}

export default function Exhibitions() {
  const exhibitions = useLoaderData()

  return (
    <Layout>
      <Hero>
        <AnimatedHeading sentence="Super Exciting Exhibitions" />
      </Hero>

      <Center>
        <ExhibitionList exhibitions={exhibitions} />
      </Center>
    </Layout>
  )
}
