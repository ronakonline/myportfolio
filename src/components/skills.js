import "../framer.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { initialTabs as tabs } from "./ingredients";
import { Grid, Box } from "@chakra-ui/layout";
import { Tooltip, Text, useBreakpointValue, Heading } from "@chakra-ui/react";

export default function App() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <>
      <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} pl={16} mt={2}>
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
      <Text fontSize="lg" pl={16} className="subheading">
        Im too lazy to make good UI. So here's a simple list.
      </Text>
      <div className="skills-container-main">
        <div className="window">
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
                  {`${item.label}`}
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
                <Grid templateColumns="repeat(5, 1fr)" gap={6} my={5}>
                  {selectedTab.icon.map((skill, index) => (
                    <Box key={index} mx={5} cursor="pointer">
                      <Tooltip label={skill.title} placement="right-end">
                        <img
                          src={skill.img}
                          alt="icon"
                          height="64px"
                          width="64px"
                        />
                      </Tooltip>
                    </Box>
                  ))}
                </Grid>
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </>
  );
}
