import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { styled } from '~/stitches'
import { MetaFunction } from 'remix'
import { Hero, AnimatedHeading, Center } from '~/components'

const url =
  'https://superdupergallery.us5.list-manage.com/subscribe/post?u=ea7f4eb41aea3e44277132474&amp;id=4324c31b57'

const SimpleForm = () => <MailchimpSubscribe url={url} />

const FormWrapper = styled('div', {
  input: {
    padding: '1em',
    fontSize: '1rem',
  },
  button: {
    padding: '1em',
    fontSize: '1rem',
    color: 'white',
    cursor: 'pointer',
    border: '2px solid white',
    background: 'none',
  },
})

export const meta: MetaFunction = () => {
  return {
    title: 'Contact Super Duper Gallery',
    description: 'Subscribe to our newsletter',
  }
}

export default function ContactPage() {
  return (
    <div>
      <Hero>
        <AnimatedHeading sentence="Contact Us" />
      </Hero>

      <Center>
        <FormWrapper>
          <SimpleForm />
        </FormWrapper>
      </Center>
    </div>
  )
}
