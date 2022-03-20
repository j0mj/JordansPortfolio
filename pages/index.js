import NextLink from 'next/link'
import { Container, Box, Heading, Image, useColorModeValue, Link, Button, List, ListItem, chakra, SimpleGrid } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import Section from '../components/layouts/section'
import Paragraph from './paragraph'
import { BioSection, BioYear } from '../components/layouts/bio'
import { GridItem } from '../components/layouts/grid-item'
import thumbWDIA from '../public/images/wdia.png'
import thumbLinkedIn from '../public/images/linkedin.png'

const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
  })

const Page = () => {
    return (
        <Layout>
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('blackAlpha.200', 'whiteAlpha.200')} p={3} mb={6} align="center">
                <h2><b>CULTURE FOR SERVICE, SERVICE FOR HUMANITY</b> <p>Full-Stack Blockchain Developer, <b>(JavaScript | Solidity | Rust )</b></p></h2>
            </Box>

            <Box display={{md:' flex'}}>
                <Box flexGrow={1}>
                
                        <Heading as="h2" variant="page-title">
                            Jordan Jones
                        </Heading> 
        <p> I think, therefore I am. </p>
        <p> I am, so I do. </p>
                </Box>
                <Box 
                flexShrink={0} 
                mt={{base: 4, md: 0}} 
                ml={{md: 6}} 
                align="center"
                >
                    <ProfileImage
              src="/images/profilepic.PNG"
              alt="Profile image"
              borderRadius='full'
              width="100%"
              height="100%"
              borderStyle="solid"
              maxWidth="200px"
              display="inline-block"
            />
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h2" variant="section-title">
                About Me
                </Heading>
                <Paragraph>
                    The <em><b>I think</b></em> in my mantra became <em><b>I do.</b></em> Dedication to being a perpetual learner and a man always looking to the future brought me into Web3.0. Instead of just being an investor I decided to become an  architect, a builder--a developer. <b>Utilizing JavaScript, Solidity, and Rust; I would love to work with you in building the future!</b>
                </Paragraph>

                <Box align="center" my={4}>
                <NextLink passHref="/works">
                  <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
                      Portfolio
                      </Button> 
                </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>1998</BioYear>
                Born in Lexington, Kentucky, USA. 
                </BioSection>
                <BioSection>
                    <BioYear>2016</BioYear>
                Left Kentucky to attend <b>Prairie View A&M University</b> pursuing a degree in Animal Science, Pre-Veterinary Medicine. 
                </BioSection>
                <BioSection>
                    <BioYear>2020</BioYear>
                    Graduated with my bachelor degree, then stopped to ask myself <b>What am I doing with my life?</b> I then started developing my character, mind, heart, eventually making my way into <b>Blockchain Technologies & Web3.0 </b>
                </BioSection>
                <BioSection>
                    <BioYear>2021</BioYear>
                    Hired as a Production Supervisor Trainee at Sanderson Farms Poultry, Inc.
                </BioSection>
              
            </Section>

            <Section delay={0.3}>
<Heading as="h3" variant="section-title">
  On the web
</Heading>
<List>
  <ListItem>
    <Link href="https://github.com/j0mj" target="_blank">
      <Button
        variant="ghost"
        colorScheme="purple"
        leftIcon={<IoLogoGithub />}
      >
        @j0mj
      </Button>
    </Link>
  </ListItem>
  <ListItem>
            <Link href="https://twitter.com/_jomj" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoLogoTwitter />}
              >
                @_jomj
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/_jomj" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoLogoInstagram />}
              >
                @_jomj
              </Button>
            </Link>
          </ListItem>
  </List>

  <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.wediditauto.com"
            title="We Did It Auto"
            thumbnail={thumbWDIA}
          >
            <b> My first MVP </b>
          </GridItem>
          <GridItem
            href="https://www.linkedin.com/in/j0mj"
            title="LinkedIn"
            thumbnail={thumbLinkedIn}
          >
           <h1><b> LinkedIn </b></h1>
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink passHref="/posts" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
              Popular posts
            </Button>
          </NextLink>
        </Box>
  </Section>
 </Container>
</Layout>

    )
    }

export default Page
export { getServerSideProps } from '../components/chakra'