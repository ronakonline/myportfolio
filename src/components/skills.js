import React from "react";
import {
  Container,
  Heading,
  Text,
  Box,
  Table,
  Tbody,
  Tr,
  Td,
} from "@chakra-ui/react";

export default function skills() {
    const skills = [
        {
            name: "Front-end",
            values: "HTML, CSS, JAVASCRIPT, REACT, REACT NATIVE"
        },
        {
            name: "Back-end",
            values: "PHP, CODEIGNITER, LARAVEL, NODEJS, EXPRESSJS"
        },
        {
            name: "Database",
            values: "MYSQL, MONGODB"
        },
        {
            name: "Others",
            values: "GITHUB, AWS, SEO, TESTING, REST API, GRAPHQL, ETC"
        }
    ];
  return (
      <>
    <Container className="skills-container" maxW="container.xl" >
      <Heading as="h2" size="xl" id="1">
        Technologies & Frameworks
      </Heading>
      <Text fontSize="xl" className="subheading">
        Here are some of my skills.
      </Text>

      <Box borderWidth="1px" borderRadius="lg" boxShadow="lg" overflow="hidden" maxW="xlg" mt={10}>
        <Table variant="simple" size="lg" colorScheme="whatsapp">
          <Tbody>
            {skills.map((skill, index) => (
                <Tr key={index}>
                    <Td><Text fontSize="lg">{skill.name}</Text></Td>
                    <Td><Text fontSize="lg">{skill.values}</Text></Td>
                </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Container>
   
   </>
  );
}
