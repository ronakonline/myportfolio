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
  Text,
} from "@chakra-ui/layout";
import { MdCheckCircle } from "react-icons/md";

import Tilt from "react-parallax-tilt";
import "./services.css";

export default function services() {
  const services = [
    "Website Development",
    "App Development",
    "CMS Development",
  ];
  return (
    <>
      <Container
        className=" service-container"
        maxW="full"
      
        px={{"base":0,"lg":16}}
      >
        <Heading pt={16} pl={[6, 4, 0]}>
          Services
        </Heading>
        <Wrap display="flex" justify="center">
          <WrapItem>
            <Tilt perspective={500} className="parallax-effect">
              <Box
                borderRadius="md"
                boxShadow="xlg"
                overflow="hidden"
                maxW="sm"
                bgColor="white"
                ml={[5, 5, 16]}
                mt={10}
                p={[5, 5, 10]}
              >
                <List className="inner-element">
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
            </Tilt>
          </WrapItem>
          <WrapItem>
            <Tilt perspective={500} className="parallax-effect">
              <Box
                borderRadius="md"
                boxShadow="xlg"
                overflow="hidden"
                maxW="sm"
                bgColor="white"
                ml={[5, 5, 16]}
                mt={10}
                p={[5, 5, 10]}
              >
                <List className="inner-element">
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
            </Tilt>
          </WrapItem>
          <WrapItem>
            <Tilt perspective={500} className="parallax-effect">
              <Box
                borderRadius="md"
                boxShadow="xlg"
                overflow="hidden"
                maxW="sm"
                bgColor="white"
                ml={[5, 5, 16]}
                mt={10}
                p={[5, 5, 10]}
              >
                <List className="inner-element">
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
            </Tilt>
          </WrapItem>
          
        </Wrap>
      </Container>
    </>
  );
}
