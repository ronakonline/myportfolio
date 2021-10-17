import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './shapes.css';
import Header from './components/header';
import { ChakraProvider } from "@chakra-ui/react"

ReactDOM.render(
  <ChakraProvider>
    <Header/>
  </ChakraProvider>,
  document.getElementById('root')
);

