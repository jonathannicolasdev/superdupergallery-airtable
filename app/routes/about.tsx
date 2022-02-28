import { MetaFunction } from 'remix'
import { Hero, AnimatedHeading, Center, TeamMembers } from '~/components'

export const meta: MetaFunction = () => {
  return {
    title: 'About Super Duper Gallery',
    description: 'The team behind Super Duper Gallery',
  }
}

export default function About() {
  return (
    <div>
      <Hero>
        <AnimatedHeading sentence="Super Duper Gallery offers a portal further beyond" />
      </Hero>

      <Center>
        <TeamMembers />
      </Center>
    </div>
  )
}
