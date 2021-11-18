import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Button,
  Box,
  Text,
  Center,
  Square,
  Image
} from "@chakra-ui/react";
import headerimg from "../skills-images/headerimg.png";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Flex, Spacer } from "@chakra-ui/react"

export default function header() {
  const menuitems = [
    {
      name: "Skills",
      link: "#1",
    },
    {
      name: "Services",
      link: "#services",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];
  return (
    <>
      <nav className="navbar">
        <div className="container-fluid menu-container">
          <Box className="navbar-brand" ml={3}>
            Ronak Pareek
          </Box>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              {menuitems.map((item) => (
                <MenuItem minH="48px" color="black">
                  {item.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </div>
      </nav>
      <div className="head-container">
        <Flex >
            <Flex flexDirection="column" justifyContent="center" px={16} pb={32}>
                <Text fontSize="4xl" fontWeight="bold">
                Hey! I am Ronak,
                </Text>
                <Text fontSize="2xl" fontWeight="bold"  p="0px">
                   
                    Im self taught web developer and <br/>
                    I love learning new things.
                </Text>
                <Button className="contact-btn" size="lg" onClick={() => alert('hi')}  colorScheme="teal" variant="outline">Contact</Button>
            </Flex>
            <Box className="fade-in floating" pb="70px" >
               <Image src={headerimg} alt="header" height="100%" width="800px" />
            </Box>
        </Flex>
      </div>
      <svg
        viewBox="0 0 1000 200"
        preserveAspectRatio="none"
        className="site-header-background"
      >
        <defs>
          <linearGradient id="header-gradient" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0C0C0C" />
            <stop offset="100%" stop-color="#0C0C0C" />
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
}
