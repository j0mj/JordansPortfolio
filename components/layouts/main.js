import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Footer from './footer'
import NavBar from '../layouts/navbar'
import Jade from './jade'
import NoSsr from './no-ssr'



  const Main = ({ children, router }) => {
    return (
      <Box as="main" pb={8}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Jordan's homepage" />
          <meta name="author" content="Jordan Jones" />
          <meta name="author" content="Jordan Jones" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@_jomj" />
          <meta name="twitter:creator" content="@_jomj" />

          <meta property="og:site_name" content="Jordan's Homepage" />
          <meta property="og:type" content="website" />

          <title>Jordan Jones - Homepage</title>
        </Head>
  
        <NavBar path={router.asPath} />
  
        <Container maxW="container.md" pt={14}>
          <NoSsr>
                <Jade />
            </NoSsr>
  
          {children}
  
          <Footer />
        </Container>
      </Box>
    )
}

export default Main 