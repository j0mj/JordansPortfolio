import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/layouts/work'
import P from '../paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="WEDIDITAUTO">
            <Container>
                <Title>
                    WE DID IT AUTO <Badge>2021</Badge>
                </Title>
                <P>
                    An automotive tinting service located in Waco, Texas and Houston, Texas. WE DID IT AUTO ran a successful fundraiser that was able to donate $500 as a scholarship to Heavens Neighborhood.
                </P>
                <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                <Link href='https://www.wediditauto.com'>
                https://www.wediditauto.com <ExternalLinkIcon mx="2px" />    
                </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Wordpress</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>()</span>
                </ListItem>

                </List>
            </Container>
        </Layout>
    )
}