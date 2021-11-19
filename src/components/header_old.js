import React from "react";
import {
  Button,
  Text,
  Flex
} from "@chakra-ui/react";

export default function header() {

  return (
    <>
      <div className="head-container">
        <Flex justifyContent="space-between" px={16} >
            <Flex flexDirection="column" justifyContent="center" wrap="wrap" >
                <Text fontSize="5xl" fontWeight="bold">
                Hey! I am Ronak,
                </Text>
                <Text fontSize="2xl" fontWeight="bold"  p="0px">
                    Im self taught web developer and <br/>
                    I love learning new things.
                </Text>
                <Button className="contact-btn" size="lg" onClick={() => alert('hi')}  colorScheme="teal" variant="outline">Contact</Button>
            </Flex>
            <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_kkflmtur.json" background="transparent"   speed="1" style={{width:"650px",height:"100%"}}    loop  autoplay></lottie-player>
            {/* <Box className="fade-in floating" pb="70px" >
               <Image src={headerimg} alt="header" height="100%" width="800px" />
            </Box> */}
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
