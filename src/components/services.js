import React from "react";
import { Container } from "@chakra-ui/layout";

export default function services() {
  return (
      <>
    <Container className="container-fluid service-container" maxW="full" p={0}>
      <svg
        viewBox="0 0 1000 200"
        preserveAspectRatio="none"
        className="site-header-background skills"
      >
        <defs>
          <linearGradient id="header-gradient1" x2="0%" y2="100%">
            <stop offset="0%" stop-color="white" />
            <stop offset="100%" stop-color="white" />
          </linearGradient>
        </defs>
        <path
          className="jagged-top1"
          id="jagged-top1"
          fill="url(#header-gradient1)"
          d="M-4,-4 L1004,-4 L1004,90 L804,90 L604,90 L404,90 L204,90 L-4,90 L-4,90 L-4,-4 Z"
        />
      </svg>
      <h1>Services</h1>
   
    </Container>
       <svg
       viewBox="0 0 1000 200"
       preserveAspectRatio="none"
       className="site-header-background"
     >
       <defs>
         <linearGradient id="header-gradient3" x2="0%" y2="100%">
           <stop offset="0%" stop-color="#0C0C0C" />
           <stop offset="100%" stop-color="#0C0C0C" />
         </linearGradient>
       </defs>
       <path
         className="jagged-top1"
         id="jagged-top3"
         fill="url(#header-gradient3)"
         d="M-4,-4 L1004,-4 L1004,90 L804,90 L604,90 L404,90 L204,90 L-4,90 L-4,90 L-4,-4 Z"
       />
     </svg>
     </>
  );
}
