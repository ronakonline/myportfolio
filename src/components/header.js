import React from "react";
import { Menu, MenuButton, MenuList, IconButton,Button } from "@chakra-ui/react";
import headerimg from "../headerimg.png";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function header() {
  return (
    <>
      <div className="container-fluid head-container">
        <nav className="navbar navbar-light">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Ronak Pareek</span>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
              />
              <MenuList></MenuList>
            </Menu>
          </div>
        </nav>

        <div className="row wrapper">
          <div className="shape"></div>
          <div className="header-img fade-in">
            <img src={headerimg} alt="header" />
          </div>
          <div className="col-12 head-text">
            <span>Hey! I am Ronak,</span>
            <br />
            <span>I build web related projects that</span>
            <br />
            <span>are useful to my clients.</span>
            <br/>
            <Button className="contact-btn" size="lg" onClick={() => alert('hi')} >Contact</Button>
          </div>
            
         
        </div>
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
