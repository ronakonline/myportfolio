import "../framer.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { initialTabs as tabs } from "./ingredients";
import { Grid, Box, Container, SimpleGrid } from "@chakra-ui/layout";
import { Tooltip, Text, useBreakpointValue, Heading, Image } from "@chakra-ui/react";

export default function App() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <Container className="skills-container" maxW="container.xl" p={0} id="skills">
      <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} mt={2} px={4}>
        <Text
          as={"span"}
          position={"relative"}
          color={"black"}
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
          Skills
        </Text>
      </Heading>
      <Text fontSize="lg"  className="subheading" px={4}>
        Im too lazy to make good UI. So here's a simple list.
      </Text>
      <Box className="skills-container-main" mt={12}>
        <Box className="window" pl={0}>
          <nav className="tab-nav">
            <ul className="ul-list">
              {tabs.map((item, index) => (
                <li
                  key={item.label}
                  className={
                    item === selectedTab ? "selected list-item" : "list-item"
                  }
                  onClick={() => setSelectedTab(item)}
                >
                  <Text fontSize={{ base:"sm" , lg:"lg" }} >{`${item.label}`}</Text>
                  {item === selectedTab ? (
                    <motion.div className="underline" layoutId="underline" />
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>
          <main className="main-container">
            <AnimatePresence exitBeforeEnter>
              <motion.div
                key={selectedTab ? selectedTab.label : "empty"}
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.15 }}
              >
                <SimpleGrid columns={[3, 4, 5]} gap={4} my={5}>
                  {selectedTab.icon.map((skill, index) => (
                    <Box key={index} mx={{"base":"2","lg":"5"}} cursor="pointer"
                        h={{ base: "80%", md: "64px" , lg:"64px" }}
                        w={{ base: "80%", md: "64px" , lg:"64px"}}>
                      <Tooltip label={skill.title} placement="right-end">
                        <Box>
                        <Image
                          src={skill.img}
                          alt="icon"
                          h={{ base: "80%", md: "64px" , lg:"64px" }}
                          w={{ base: "80%", md: "64px" , lg:"64px"}}
                        />
                        </Box>
                      </Tooltip>
                    </Box>
                  ))}
                </SimpleGrid>
              </motion.div>
            </AnimatePresence>
          </main>
        </Box>
      </Box>
    </Container>
  );
}
