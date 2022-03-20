import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/layouts/section'
import { WorkGridItem } from '../components/layouts/grid-item'
import Layout from '../components/layouts/article'


import thumbWDIA from '../public/images/wdia.png'

const Works = () => {
    return (
        <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid column={[1,1,2]} gap={6}>
            <Section>
                <WorkGridItem id="WEDIDITAUTO" title="We Did It Auto: Automotive Tint Service" thumbnail={thumbWDIA}>
                    
                    A Wordpress website where I utilized marketing techniques, pricing models, and UI design to generate sales for my personal automotive tinting business.
                </WorkGridItem>
            </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Works 
export { getServerSideProps } from '../components/chakra'