import { format, formatISO } from 'date-fns'
import { styled } from '~/stitches'

type ArtworkDateProps = {
  date: Date
}

const DateTimeText = styled('span', {
  color: 'white',
})

export const ArtworkDate = ({ date }: ArtworkDateProps) => {
  return (
    <time dateTime={formatISO(date)}>
      <DateTimeText>{format(date, 'LLLL d, yyyy')}</DateTimeText>
    </time>
  )
}
