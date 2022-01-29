import { FunctionComponent } from 'react'
import { Link } from 'remix'

interface NavigationProps {}

const Navigation: FunctionComponent<NavigationProps> = () => {
  const navigationLinks = [
    { to: '/', text: 'Home' },
    { to: '/about', text: 'About' },
    { to: '/exhibitions', text: 'Exhibitions' },
    { to: '/artists', text: 'Artists' },
    { to: '/artworks', text: 'Artworks' },
    { to: '/contact', text: 'Contact' },
  ]

  return (
    <nav>
      <ul>
        {navigationLinks.map((navigationLink, index) => {
          return (
            <li key={index}>
              <Link to={navigationLink.to}>{navigationLink.text}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navigation
