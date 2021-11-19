import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <SimpleGrid
      id="home"
        columns={{ base: 1, md: 2 }}
        spacing={0}
        _after={{
          bg: "#0C0C0C",
          opacity: 0.25,
          pos: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          zIndex: -1,
          content: '" "',
        }}
        bg="#0C0C0C"
        minHeight="100vh"
        maxWidth="100%"
      >
        <Flex
          direction="column"
          alignItems="start"
          justifyContent="center"
          bg="#0C0C0C"
          px={{ base: 4, lg: 20 }}
          py={24}
          position="relative"
        >
          <Box
            // position="absolute"
            // bottom="220px"
            // left={2}
            display={["none", "none", "none", "block"]}
            className="child1"
          >
            <lottie-player
              src="https://assets6.lottiefiles.com/packages/lf20_1wyqjumb.json"
              background="transparent"
              speed="1"
              style={{ height: "350px", width: "400px" }}
              loop
              autoplay
            ></lottie-player>
          </Box>
          <Box
            className="child"
            mt={{ base: 16, lg: 0 }}
          >
            <chakra.h1
              mb={6}
              fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}
              fontWeight="bold"
              color={useColorModeValue("brand.600", "gray.300")}
              lineHeight="shorter"
            >
              I am Ronak,
            </chakra.h1>
            <chakra.p
              
              mb={4}
              fontSize={{ base: "xl", md: "2xl", lg: "2xl" }}
              color={useColorModeValue("brand.600", "gray.400")}
              letterSpacing="wide"
            >
              Im self taught web developer and <br />I love learning new things.
            </chakra.p>
            <Button
              size="lg"
              onClick={() => alert("hi")}
              colorScheme="teal"
              variant="outline"
            >
              Contact
            </Button>
          </Box>
        </Flex>
        <Box>
          <lottie-player
            src="https://assets2.lottiefiles.com/packages/lf20_kkflmtur.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </Box>
      </SimpleGrid>
      <svg
        viewBox="0 0 1000 200"
        preserveAspectRatio="none"
        className="site-header-background"
      >
        <defs>
          <linearGradient id="header-gradient" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0C0C0C" />
            <stop offset="100%" stopColor="#0C0C0C" />
          </linearGradient>
        </defs>
        <path
          className="jagged-top"
          id="jagged-top"
          fill="url(#header-gradient)"
          d="M-4,-4 L1004,-4 L1004,90 L804,90 L604,90 L404,90 L204,90 L-4,90 L-4,90 L-4,-4 Z"
        />
      </svg>
    </>
  );
};

export default Header;
