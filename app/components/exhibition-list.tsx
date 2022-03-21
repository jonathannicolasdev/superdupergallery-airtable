import { parseISO } from 'date-fns'
import { styled } from '~/stitches'

import { RemixLink, ArtworkDate } from '~/components'

import { ExhibitionContent } from '~/types'
import { FunctionComponent } from 'react'

interface ExhibitionListProps {
  exhibitions: ExhibitionContent[]
}

interface ExhibitionItemProps {
  exhibition: ExhibitionContent
}

const ExhibitionCollection = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

const ExhibitionListContainer = styled('div', {})

const ExhibitionItemContainer = styled('article', {
  display: 'flex',
  flexDirection: 'column',
  margin: '2em 0',
  fontSize: '1.2rem',
  maxWidth: '1000px',
  h3: {
    fontSize: '2rem',
  },
  '*': {
    display: 'block',
    marginBottom: '0.5em',
    '@desktop': {
      marginBottom: '1em',
    },
  },
  '@desktop': {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})

const ExhibitionItemImage = styled('img', {
  width: '100%',
})

const ExhibitionItemSection = styled('section', {
  maxWidth: '600px',
  '@desktop': {
    margin: '0 1em',
  },
})

const ExhibitionDescription = styled('p', {
  maxWidth: '42ch',
})

const ExhibitionItemLinkButton = styled('a', {
  cursor: 'pointer',
  color: 'white',
  border: '2px solid white',
  padding: '0.5em 1em',
  transition: 'all 0.25s ease-in-out',
  textDecoration: 'none',
  '&:hover': {
    backgroundColor: 'white',
    color: 'black',
  },
})

export const ExhibitionList: FunctionComponent<ExhibitionListProps> = ({
  exhibitions,
}) => {
  return (
    <ExhibitionListContainer>
      <ExhibitionCollection>
        {exhibitions.map((item, index) => (
          <ExhibitionItem key={index} exhibition={item} />
        ))}
      </ExhibitionCollection>
    </ExhibitionListContainer>
  )
}

export const ExhibitionItem: FunctionComponent<ExhibitionItemProps> = ({
  exhibition,
}) => {
  return (
    <ExhibitionItemContainer>
      <ExhibitionItemSection>
        <ExhibitionItemImage
          src={exhibition.coverImage?.url as string}
          alt={exhibition.name}
        />
      </ExhibitionItemSection>

      <ExhibitionItemSection>
        <h3>{exhibition.name}</h3>
        <ArtworkDate date={parseISO(String(exhibition.date))} />
        <ExhibitionDescription>{exhibition.description}</ExhibitionDescription>
        <div>
          <RemixLink to={'/exhibitions/' + exhibition.slug}>
            <ExhibitionItemLinkButton>Enter</ExhibitionItemLinkButton>
          </RemixLink>
        </div>
      </ExhibitionItemSection>
    </ExhibitionItemContainer>
  )
}
