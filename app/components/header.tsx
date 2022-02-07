import { styled } from '~/stitches'

import { RemixLink, Logo } from '~/components'

const HeaderContainer = styled('header', {
  width: '100%',
  border: '2px solid white',
  minHeight: '100px',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  '@desktop': {
    flexDirection: 'row',
    alignItems: 'center',
  },
})

const HeaderSegment = styled('div', {
  display: 'flex',
  justifyContent: 'center',
})

const HeaderDivider = styled('div', {
  borderTop: '2px solid white',
  '@desktop': {
    borderWidth: '0 2px 0 2px',
    borderStyle: 'solid',
    borderColor: 'white',
    height: '120px',
    flex: 1,
  },
})

const Tagline = styled('h2', {
  color: 'white',
  textAlign: 'center',
  paddingBottom: '0.5em',
  fontSize: '1rem',
  '@desktop': {
    fontSize: '1.2rem',
    padding: '0.5em',
    textAlign: 'left',
  },
})

const Navigation = styled('nav', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  textTransform: 'uppercase',
  fontWeight: 900,
  fontSize: '0.75rem',
  padding: '1em 0',
  '@desktop': {
    fontSize: '1rem',
  },
  a: {
    letterSpacing: '1px',
    color: 'white',
    textDecoration: 'none',
    margin: '0 1.2em',
    '@desktop': {
      margin: '0 1em',
    },
  },
})

const NavigationLink = styled('a', {
  cursor: 'pointer',
  padding: '0.5em',
  border: '0px solid black',
  borderWidth: '5px 0',
  '&:hover': {
    borderBottom: '5px solid red',
  },
})

const MenuButton = styled('button', {
  background: 'black',
  border: '2px solid white',
  borderRadius: '1em',
  margin: '0.5em',
  padding: '0.5em',
  color: 'white',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  '@desktop': {
    margin: '1em',
    padding: '1em',
  },
})

const navigationLinks = [
  { to: '/about', text: 'About' },
  { to: '/exhibitions', text: 'Exhibitions' },
  { to: '/artworks', text: 'Artworks' },
  { to: '/artists', text: 'Artists' },
  { to: '/contact', text: 'Contact' },
]

export const Header = () => {
  return <HeaderDesktop />
}

const HeaderDesktop = () => {
  return (
    <HeaderContainer>
      <HeaderSegment>
        <RemixLink to="/">
          <Logo />
        </RemixLink>
      </HeaderSegment>
      <HeaderSegment>
        <Tagline>
          Contemporary Art Gallery <br /> based in 🇵🇭 QC, Philippines
        </Tagline>
      </HeaderSegment>

      <HeaderDivider />

      <HeaderSegment>
        <Navigation>
          {navigationLinks.map((navLink, index) => {
            return (
              <RemixLink key={navLink.text} to={navLink.to}>
                <NavigationLink>{navLink.text}</NavigationLink>
              </RemixLink>
            )
          })}
        </Navigation>
      </HeaderSegment>
    </HeaderContainer>
  )
}

const HeaderMobile = () => {
  return (
    <HeaderContainer>
      <HeaderSegment>
        <RemixLink to="/">
          <Logo />
        </RemixLink>
      </HeaderSegment>
      <HeaderDivider />
      <HeaderSegment>
        <Tagline>
          Contemporary Art Gallery <br /> based in 🇵🇭 QC, Philippines
        </Tagline>
      </HeaderSegment>
      <HeaderDivider />
      <HeaderSegment>
        <MenuButton>Menu</MenuButton>
      </HeaderSegment>
    </HeaderContainer>
  )
}
