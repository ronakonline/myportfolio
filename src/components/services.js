import React from "react";
import {
  Container,
  Heading,
  Box,
  List,
  ListItem,
  ListIcon,
  Wrap,
  WrapItem,
} from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { MdCheckCircle } from "react-icons/md";

export default function services() {
  const services = [
    "Website Development",
    "App Development",
    "CMS Development",
  ];
  return (
    <>
      <Container
        className="container-fluid service-container"
        maxW="full"
        mt={100}
      >
        <Heading pt={16} pl={[5,0,16]}>Services</Heading>
        <Wrap>
          <WrapItem>
            <Box
              borderRadius="md"
              boxShadow="xlg"
              overflow="hidden"
              maxW="sm"
              bgColor="white"
              ml={[5,5,16]}
              mt={10}
              p={[5,5,10]}
            >
              <List>
                {services.map((service, index) => (
                  <ListItem key={index}>
                    <ListIcon as={MdCheckCircle} color="#212842" />
                    <Text color="#212842" fontSize="20px" as="b">
                      {service}
                    </Text>
                  </ListItem>
                ))}
              </List>
            </Box>
          </WrapItem>
          <WrapItem>
            <Box
              borderRadius="md"
              boxShadow="xlg"
              overflow="hidden"
              maxW="sm"
              bgColor="white"
              ml={[5,5,16]}
              mt={10}
              p={[5,5,10]}
            >
              <List>
                {services.map((service, index) => (
                  <ListItem key={index}>
                    <ListIcon as={MdCheckCircle} color="#212842" />
                    <Text color="#212842" fontSize="20px" as="b">
                      {service}
                    </Text>
                  </ListItem>
                ))}
              </List>
            </Box>
          </WrapItem>
          <WrapItem>
            <Box
              borderRadius="md"
              boxShadow="xlg"
              overflow="hidden"
              maxW="sm"
              bgColor="white"
              ml={[5,5,16]}
              mt={10}
              p={[5,5,10]}
            >
              <List>
                {services.map((service, index) => (
                  <ListItem key={index}>
                    <ListIcon as={MdCheckCircle} color="#212842" />
                    <Text color="#212842" fontSize="20px" as="b">
                      {service}
                    </Text>
                  </ListItem>
                ))}
              </List>
            </Box>
          </WrapItem>
        </Wrap>
      </Container>

    </>
  );
}
