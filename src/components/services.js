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
    "WebApp Development",
    "CMS Development"
  ];
  const services1 = [
    "Native Application",
    "Hybrid Application",
    "PWA Application"
  ];
  const services2 = [
    "Ecommerce Website",
    "API Development",
    "Automation"
  ];
  return (
    <Container
      maxW="100vw"
      id="services"
        className="service-container"
    >
      <Container
        className="service-container"
        maxW="container.xl"
        
      >
        <Box position="relative" zIndex="1">
        <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} mt={2} pt={8} px={4}>
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
            bg: "teal.400",
            zIndex: -1,
          }}
        >
          Services
        </Text>
      </Heading>
      </Box>
        <Wrap display="flex" justify="center">
          <WrapItem>
            <Tilt perspective={500} className="parallax-effect">
              <Box
                borderRadius="md"
                boxShadow="xlg"
                overflow="hidden"
                maxW="xs"
                bgColor="white"
                mx={[5, 5, 16]}
                mt={10}
                p={[5, 5, 10]}
                minW="xs"
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
                maxW="xs"
                bgColor="white"
                mx={[5, 5, 16]}
                mt={10}
                p={[5, 5, 10]}
                minW="xs"
              >
                <List className="inner-element">
                  {services1.map((service, index) => (
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
                maxW="xs"
                bgColor="white"
                mx={[5, 5, 16]}
                mt={10}
                p={[5, 5, 10]}
                minW="xs"
              >
                <List className="inner-element">
                  {services2.map((service, index) => (
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
    </Container>
  );
}
