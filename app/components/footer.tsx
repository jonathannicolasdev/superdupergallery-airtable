import { styled } from '~/stitches'

import { RemixLink, Logo } from '~/components'

const FooterContainer = styled('footer', {
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
  border: '2px solid white',
  minHeight: '200px',
  padding: '0.5em 0',
  marginTop: '5em',
  '@desktop': {
    flexDirection: 'row',
    alignItems: 'center',
  },
})

const FooterSegment = styled('div', {
  margin: '0.5em 1.5em',
})

const AddressAnchor = styled('a', {
  display: 'block',
  cursor: 'pointer',
  color: 'white',
  textDecoration: 'none',
  padding: '0.5em 0',
  borderBottom: '5px solid black',
  fontSize: '1.2rem',
  width: '100%',
  minWidth: '250px',
  maxWidth: '380px',
  transition: 'all 0.25s ease-in-out',
  '&:hover': {
    borderBottom: '5px solid red',
  },
})

const EmailLink = styled('a', {
  color: 'white',
  textDecoration: 'none',
  borderBottom: '5px solid black',
  fontSize: '1rem',
  transition: 'all 0.25s ease-in-out',
  '@desktop': {
    fontSize: '1.5rem',
  },
  '&:hover': {
    borderBottom: '5px solid red',
  },
})

const SocialMediaLinks = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  width: '120px',
})

const SocialMediaLink = styled('a', {
  display: 'block',
  cursor: 'pointer',
  img: {
    width: '50px',
    height: '50px',
  },
})

const socialMediaLinks = [
  {
    name: 'Instagram',
    url: 'https://instagram.com/superdupergallery',
    iconUrl: '/images/instagram.svg',
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/superdupergallery',
    iconUrl: '/images/facebook.svg',
  },
]

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterSegment>
        <RemixLink to="/">
          <a>
            <Logo />
          </a>
        </RemixLink>
      </FooterSegment>

      <FooterSegment>
        <AddressAnchor
          href="https://goo.gl/maps/NGtoAsrkYFCH1cud8"
          target="_blank"
        >
          <address>
            <span>No.8-A 11th Jamboree, </span>
            <span>Diliman, </span>
            <span>Quezon City, </span>
            <span>1103 Metro Manila, </span>
            <span>Philippines</span>
          </address>
        </AddressAnchor>
      </FooterSegment>

      <FooterSegment>
        <EmailLink
          href="mailto:superdupergallery@gmail.com"
          target="_blank"
          rel="noopener"
        >
          superdupergallery@gmail.com
        </EmailLink>
      </FooterSegment>

      <FooterSegment>
        <SocialMediaLinks>
          {socialMediaLinks.map((socialMediaLink, index) => {
            return (
              <SocialMediaLink
                key={socialMediaLink.name}
                href={socialMediaLink.url}
                target="_blank"
              >
                <img src={socialMediaLink.iconUrl} alt={socialMediaLink.name} />
              </SocialMediaLink>
            )
          })}
        </SocialMediaLinks>
      </FooterSegment>

      <FooterSegment>
        <p>&copy; Super Duper Gallery</p>
      </FooterSegment>
    </FooterContainer>
  )
}
