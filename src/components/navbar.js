import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  Text
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeLink, setActiveLink] = useState("Home");
  const Links = ["Home", "Skills", "Services", "Work", "Contact"];

  const NavLink = ({ children }: { children: ReactNode }) => (
    <ScrollLink
      to={children.toLowerCase()}
      activeClass="active"
      spy={true}
      smooth={true}
      offset={-60}
      duration={1500}
      onClick={() => setActiveLink(children)}
    >
      <Link
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
          textDecoration: "underline",
          color: "teal.400"
        }}
        href={"#"}
        color={activeLink === children ? "teal.400" : null}
        textDecoration={activeLink === children ? "underline" : "none"}
        fontSize={["sm", "md", "lg"]}
      >
        {children}
      </Link>
    </ScrollLink>
  );
  return (
    <>
      <Box
        bg="#0C0C0C"
        px={4}
        as="header"
        position="fixed"
        zIndex={1}
        w="100vw"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            color="#0C0C0C"
            onClick={isOpen ? onClose : onOpen}
          />
          <Text fontSize={20} fontWeight="semibold" ml={8}>
            Ronak Pareek
          </Text>
          <HStack
            as={"nav"}
            spacing={4}
            display={{ base: "none", md: "flex" }}
            pr={16}
          >
            {Links.map((link) => (
              <NavLink key={link} color="teal" textDecoration="underline">
                {link}
              </NavLink>
            ))}
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
