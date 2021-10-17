import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './shapes.css';
import Header from './components/header';
import Skills from './components/skills';
import { ChakraProvider } from "@chakra-ui/react"

ReactDOM.render(
  <ChakraProvider>
    <Header/>
    <Skills/>
  </ChakraProvider>,
  document.getElementById('root')
);

