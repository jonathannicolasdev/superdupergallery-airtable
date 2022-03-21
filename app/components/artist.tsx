import { styled } from '~/stitches'

const Tags = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  fontSize: '1rem',
})

const Tag = styled('div', {
  color: 'white',
  padding: '0.5em',
  margin: '0.25em',
  border: '2px solid white',
  variants: {
    color: {
      white: { borderColor: 'white' },
      red: { borderColor: 'red' },
      orange: { borderColor: 'orange' },
      yellow: { borderColor: 'yellow' },
      green: { borderColor: 'green' },
      blue: { borderColor: 'blue' },
      purple: { borderColor: 'purple' },
      pink: { borderColor: 'pink' },
    },
  },
})

type ArtistTagProps = {
  color?: any
  children: React.ReactNode
}

export const ArtistTags = ({ children }: { children: React.ReactNode }) => {
  return <Tags>{children}</Tags>
}

export const ArtistTag = ({ color, children }: ArtistTagProps) => {
  return <Tag color={color}>{children}</Tag>
}
