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
  useBreakpointValue
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

import Tilt from "react-parallax-tilt";
import "./services.css";

export default function Services() {
  const services = [
    "Website Development",
    "App Development",
    "CMS Development",
  ];
  return (
    <>
      <Container
        id="services"
        className="service-container"
        px={{"base":0,"lg":16}}
        maxWidth="100%"
      >
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} mt={2} pt={8}>
        <Text
          as={"span"}
          position={"relative"}
          color={"white"}
          _after={{
            content: "''",
            width: "full",
            height: useBreakpointValue({ base: "20%", md: "30%" }),
            position: "absolute",
            bottom: 1,
            left: 0,
            bg: "white",
            zIndex: -1,
          }}
        >
          Services
        </Text>
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
