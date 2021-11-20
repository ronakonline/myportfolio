import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";
import { Link,Router } from "react-router-dom";

export default function contact() {
  return (
    <Container
      id="contact"
      bg="gray.50"
      maxW="full"
      mt={0}
      centerContent
      overflow="hidden"
      position="relative"
    >
      <Box
        position="absolute"
        translateX="50%"
        left="3%"
        display={["none", "none", "none", "block"]}
      >
        <lottie-player
          src="https://assets1.lottiefiles.com/private_files/lf30_cc9cxym5.json"
          background="transparent"
          speed="1"
          style={{ height: "250px", width: "250px" }}
          loop
          autoplay
        ></lottie-player>
      </Box>

    
     
      <Flex>
        <Box
          bg="#02054B"
          color="white"
          borderRadius="lg"
          m={[5, 5, 16]}
          p={[3, 5, 16]}
        >
          <Box>
            <Wrap spacing={[10, 0, 20]}>
              <WrapItem>
                <Box>
                  <Heading>Contact</Heading>
                  <Text mt={[3, 5, 5]} color="gray.500">
                    Fill up the form below to get in touch with me
                  </Text>
                  <Box mt={[0, 0, 10]} py={[5, 8, 10]}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="210px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdPhone color="#1970F1" size="20px" />}
                      >
                        +91-9265074781
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="300px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdEmail color="#1970F1" size="20px" />}
                      >
                        ronakpareek280@gmail.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdLocationOn color="#1970F1" size="20px" />}
                      >
                        Karnavati, India
                      </Button>
                    </VStack>
                  </Box>
                   <Box
                    position="absolute"
                    translateX="50%"
                    translateY="50%"
                    bottom="12%"
                    
                    // display={["none", "none", "none", "block"]}
                  >
                    <lottie-player
                      src="https://assets1.lottiefiles.com/packages/lf20_rvqjxeql.json"
                      background="transparent"
                      speed="1"
                      style={{ height: "250px", width: "250px" }}
                      loop
                      autoplay
                    ></lottie-player>
                  </Box>
                  <HStack
                    mt={[0, 0, 10]}
                    spacing={5}
                    px={5}
                    alignItems="flex-start"
                  >
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#0D74FF" }}
                      icon={<MdFacebook size="28px" />}
                      onClick={event =>  window.open("https://www.facebook.com/Roonnaakk/", '_blank') }
                    />
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#0D74FF" }}
                      icon={<BsGithub size="28px" />}
                      onClick={event =>  window.open("https://github.com/ronakonline", '_blank') }
                    />
                    <IconButton
                      aria-label="discord"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#0D74FF" }}
                      icon={<BsDiscord size="28px" />}
                      onClick={event =>  window.open("https://discordapp.com/users/404316876999622656", '_blank') }
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea></Textarea>
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          variant="solid"
                          bg="#0D74FF"
                          color="white"
                          _hover={{}}
                        >
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
