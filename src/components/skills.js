import "../framer.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { initialTabs as tabs } from "./ingredients";
import { Grid,Box } from "@chakra-ui/layout";

export default function App() {

  const [selectedTab, setSelectedTab] = useState(tabs[0]);


  return (
    <div className="skills-container-main">
      <div className="window">
        <nav className="tab-nav">
          <ul className="ul-list">
            {tabs.map((item,index) => (
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
              {/* {selectedTab ? selectedTab.icon : "😋"}
              <span>{selectedTab.icon}</span> */}
              <Grid templateColumns="repeat(5, 1fr)" gap={6} my={5}>
              {selectedTab.icon.map((skill,index)=>(
                
                <Box key={index} mx={5}>
                <img src={skill.img} alt="icon" height="64px" width="64px" />
                {/* <p className="skilltitle">{skill.title}</p> */}
                </Box>
               
              ))}
               </Grid>
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
