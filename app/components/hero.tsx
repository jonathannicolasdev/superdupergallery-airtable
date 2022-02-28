import { styled } from '~/stitches'

export const Hero = styled('section', {
  display: 'flex',
  justifyContent: 'center',
  margin: '50px 0',
  marginBottom: '75px',
  '@desktop': {
    margin: '75px 0',
  },
})

export const HeroCenter = styled('div', {
  margin: '1em 0',
})

export default Hero
