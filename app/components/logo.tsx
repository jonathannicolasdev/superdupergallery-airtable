import { styled } from '~/stitches'

const LogoImage = styled('img', {
  width: '80px',
  height: '80px',
  '@desktop': {
    width: '120px',
    height: '120px',
  },
})

export const Logo = () => {
  return <LogoImage src="/images/logo.jpg" alt="Logo" />
}
