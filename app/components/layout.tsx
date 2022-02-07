import { FunctionComponent } from 'react'
import { styled } from '~/stitches'

import { Header, Footer } from '~/components'

const Page = styled('div', {
  color: 'white',
  backgroundColor: 'black',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  alignItems: 'center',
  padding: '1em',
})

const Main = styled('main', {
  flex: 1,
  width: '100%',
})

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <Page className="root">
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Page>
  )
}
