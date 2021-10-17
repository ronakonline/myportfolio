import React from 'react'
import { Container, Heading,Text,Box } from '@chakra-ui/react'

export default function skills() {
    return (
        <Container className="skills-container" maxW="container.xl">
            <Heading as="h2" size="xl">Technologies & Frameworks</Heading>
            <Text fontSize="xl" className="subheading">Here are some of my skills.</Text>

            <Box maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden">

            </Box>
        </Container>
    )
}

