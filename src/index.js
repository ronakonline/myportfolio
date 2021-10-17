import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './shapes.css';
import Header from './components/header';
import Skills from './components/skills';
import Services from './components/services';
import { ChakraProvider } from "@chakra-ui/react"

ReactDOM.render(
  <ChakraProvider>
    <Header/>
    <Skills/>
    <Services/>
  </ChakraProvider>,
  document.getElementById('root')
);

