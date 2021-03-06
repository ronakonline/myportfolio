import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header';
import Skills from './components/skills';
import Services from './components/services';
import Projects from './components/projects';
import Contact from './components/contact';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { ChakraProvider } from "@chakra-ui/react"

ReactDOM.render(
  <ChakraProvider>
    <Navbar/>
    <Header/>
    <Skills/>
    <Services/>
    <Projects/>
    <Contact/>
    <Footer/>
  </ChakraProvider>,
  document.getElementById('root')
);

