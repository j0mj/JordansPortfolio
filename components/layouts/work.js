import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({children}) => (
    <Box>
        <NextLink passHref="/works">
        <Link>Works</Link>    
        </NextLink>
    
    <span>
        &nbsp;
        <ChevronRightIcon />
        &npsp;
    </span>
    <Heading display='inline-block' as="h3" fontSize={20} mb={4}>
        {children}
        </Heading>
    </Box>
)

export const workImage = ({ src, alt }) => (
    <Image borderRadius="lg" 
    w="full" 
    src={src} 
    alt={alt} 
    mb={4} />
)

export const Meta = ({children}) => (
    <Badge colorScheme="purple" mr={2}>
      {children}    
    </Badge>
)