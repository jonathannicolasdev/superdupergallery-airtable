import { json, LoaderFunction, MetaFunction, useLoaderData } from 'remix'
import { airtableFetch } from '~/lib/airtable'
import {
  Hero,
  AnimatedHeadingHome,
  Center,
  Article,
  ArticleHeading,
  Section,
  CoverImage,
  MapAnchor,
  MapImage,
} from '~/components'

export const loader: LoaderFunction = async () => {
  const artworks = await airtableFetch(
    '/Artworks?maxRecords=3&view=All%20Artworks'
  )

  return json(artworks?.data?.records)
}

export default function HomePage() {
  const artworks = useLoaderData()

  return (
    <div>
      <Hero>
        <AnimatedHeadingHome />
      </Hero>

      <Center>
        <CoverImage />
        <Article>
          <Section>
            <ArticleHeading>
              Super Duper Gallery offers a portal further beyond
            </ArticleHeading>
          </Section>
          <Section>
            <p>
              It is a contemporary art gallery that welcomes a wide range of
              artistic provocations.
            </p>
            <p>
              Artists are given the opportunity to explore and creatively labor
              upon the energy that drives their limitless imagination.
            </p>
            <p>
              The gallery embraces a range of expressions and intentions, from
              serious to the unapologetically whimsical.
            </p>
          </Section>
          <Section>
            <p>
              Artists may freely choose the contemplative in challenging yet
              innovative ways or provide an occasional jesting commentary.
            </p>
            <p>
              They can also renegotiate ontologies of art and rethink parameters
              of validity in the market.
            </p>
          </Section>
          <Section>
            <p>
              Although it is physically located in Quezon City, the gallery
              offers a glimpse into the diverse contemporary art practices and
              media that artists have to offer regardless of ethnicity,
              nationality, and geographic borders.
            </p>
          </Section>
          <Section>
            <p>
              Super Duper is a contemporary art gallery that features carefully
              curated exhibitions that transcend conceptual boundaries,
              established trends, and cliques.
            </p>
            <p>
              The innovative program of exhibitions is reflective of the
              gallery’s dictum: ignore the compulsory and pursue the super
              duper.
            </p>
          </Section>
        </Article>

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

        <Article>
          <Section>
            <ArticleHeading>Our Expertise</ArticleHeading>
          </Section>
          <Section>
            <p>
              The gallery offers facilities and services for solo and group
              exhibitions, artist exchanges, and other collateral activities.
            </p>
            <p>
              It has a team of artists with a wealth of experience in curation,
              exhibition design, marketing, and project management.
            </p>
            <p>
              The gallery serves as a platform for emerging and established
              artists from across and outside the archipelago.
            </p>
            <p>
              It is a node within a network of art institutions, collectives,
              and artworld stakeholders.
            </p>
            <p>
              Last but not the least, it is a haven and playground for artists
              who wish to experiment and even play.{' '}
            </p>
          </Section>
        </Article>

        <MapAnchor
          href="https://goo.gl/maps/NGtoAsrkYFCH1cud8"
          target="_blank"
          rel="noreferrer"
        >
          <MapImage />
        </MapAnchor>
      </Center>
    </div>
  )
}
