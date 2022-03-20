import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/layouts/section'
import { GridItem } from '../components/layouts/grid-item'

import thumbLady from '../public/images/ladybug.png'

const Posts = () => (
    <Layout title="Posts">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Blog Posts
        </Heading>
  
        <Section delay={0.1}>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              title="The Beginning of my Journey"
              thumbnail={thumbLady}
              href="https://medium.com/@j0mj/the-story-of-lady-bugs-blockchain-new-beginnings-healing-a8d9e1fab48c"
            />
          </SimpleGrid>
        </Section>
        </Container>
        </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'