import { FunctionComponent } from 'react'
import { ArtworkContent } from '~/types'
import {
  Article,
  ArticleHeading,
  Center,
  Hero,
  HeroCenter,
  Section,
  ArtistTag,
  ArtworkDate,
} from '~/components'

import { styled } from '~/stitches'
import { parseISO } from 'date-fns'

const ArtworkImages = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '2rem',
  justifyContent: 'center',
})

const ArtworkImage = styled('img', {
  maxHeight: '500px',
})

interface ArtworkProps {
  artwork: ArtworkContent
}

export const Artwork: FunctionComponent<ArtworkProps> = ({ artwork }) => {
  return (
    <div>
      <Hero>
        <HeroCenter>
          <ArtworkImages>
            {artwork?.images?.map((image: any) => {
              return <ArtworkImage src={image.url} alt={artwork.title} />
            })}
          </ArtworkImages>
        </HeroCenter>
      </Hero>

      <Center>
        <Article>
          <Section>
            <ArticleHeading>{artwork.title}</ArticleHeading>
            <ArtistTag>{artwork.artist?.name}</ArtistTag>
            <ArtworkDate date={parseISO(String(artwork.date))} />
          </Section>
        </Article>
      </Center>
    </div>
  )
}
