import {
  Container,
  Heading,
  Text,
  Box,
  HStack,
  Stack,
  Image,
  Tag,
  TagLabel,
  SimpleGrid,
  useBreakpointValue
} from "@chakra-ui/react";
import { useState } from "react";
import Tilt from "react-parallax-tilt";
import travelcrunch from "../projects-images/travelcrunch.png";
import allthingsurban from "../projects-images/dabd.png";
import zugad from "../projects-images/zugad.png";
import match2marry from "../projects-images/match2marry.png";
import borntogive from "../projects-images/borntogive.png";
import brightsalon from "../projects-images/brightsalon.png";
import burger from "../projects-images/burger.gif";
import cprnow from "../projects-images/cprnow.png";
import driveschool from "../projects-images/driveschool.png";
import ptbright from "../projects-images/ptbright.png";
import qncenter from "../projects-images/qncenter.png";
import studeyabroad from "../projects-images/studeyabroad.gif";

function filterProjects(projects, filter) {
  if (filter === "all") {
    return projects;
  }
  return projects.filter((projects) => projects.types.includes(filter));
}

export default function Projects() {
  const [filter, setFilter] = useState("CODEIGNITER");
  const projects = [
    {
      name: "Travel Crunch",
      types: ["PHP", "MYSQL", "CODEIGNITER"],
      description:
        "Travel trips booking website where user can book different types of trips as per their requirment.Fully dynamic website all contents can be managed by admin panel.",
      image: travelcrunch,
      tags : ["PHP", "MYSQL",  "CMS", "HTML", "CSS", "CODEIGNITER", "BOOTSTRAP"],
    },
    {
      name: "Zugad",
      types: ["PHP", "MYSQL", "CODEIGNITER"],
      description:
        "Service providing site B2B and B2C. Service seller can register and provide service to customer from zugad platform.Fully dynamic website with admin panel",
      image: zugad,
      tags : ["PHP", "MYSQL",  "CMS", "HTML", "CSS", "CODEIGNITER", "BOOTSTRAP"],
    },
    {
      name: "DABD",
      types: ["PHP", "MYSQL", "CODEIGNITER"],
      description:
        "Dallas texas business listing website. Customer can find business and contact them with DABD platform. Business can list there business on DABD ",
      image: allthingsurban,
      tags : ["PHP", "MYSQL",  "CMS", "HTML", "CSS", "CODEIGNITER", "BOOTSTRAP"],
    },
    {
      name: "Match 2 Marry",
      types: ["PHP", "MYSQL", "CODEIGNITER"],
      description:
        "Matrimony and Marriage related services providing site.Where user can find there partner or services required for marriage like DJ, Photographer, Food, etc. serice providers can register and offer there services ",
      image: match2marry,
      tags : ["PHP", "MYSQL",  "CMS", "HTML", "CSS", "CODEIGNITER", "BOOTSTRAP"],
    },
    // {
    //   name: "Manhatan Burger",
    //   types: ["PHP", "MYSQL", "CODEIGNITER"],
    //   description:
    //     "Food Store Website managable thew admin panel",
    //   image: burger,
    //   tags : ["PHP", "MYSQL",  "CMS", "HTML", "CSS", "CODEIGNITER", "BOOTSTRAP"],
    // },
    {
      name: "PT Bright",
      types: ["PHP", "MYSQL", "CODEIGNITER"],
      description:
        "Ecommerce Website to sell organic products ",
      image: ptbright,
      tags : ["PHP", "MYSQL",  "CMS", "HTML", "CSS", "CODEIGNITER", "BOOTSTRAP", "ECOMMERCE"],
    },
    {
      name: "QN Center",
      types: ["PHP", "MYSQL", "CODEIGNITER"],
      description:
        "QN Center (Quick Notice) where institues can register and post notes, blogs, important notices and student can access.",
      image: qncenter,
      tags : ["PHP", "MYSQL",  "CMS", "HTML", "CSS", "CODEIGNITER", "BOOTSTRAP"],
    },
    {
      name: "CPRNOW",
      types: ["PHP", "MYSQL", "CODEIGNITER"],
      description:
        "Institue that provides certification courses for cpr process",
      image: cprnow,
      tags : ["PHP", "MYSQL",  "CMS", "HTML", "CSS", "CODEIGNITER", "BOOTSTRAP"],
    },
    {
      name: "Born to Give",
      types: ["PHP", "MYSQL", "CODEIGNITER"],
      description:
        "Charity website where you can by lottery tickets and all the money of lottery tickets goes to charity",
      image: borntogive,
      tags : ["PHP", "MYSQL",  "CMS", "HTML", "CSS", "CODEIGNITER", "BOOTSTRAP"],
    },
  ];

  const projectTypes = projects.reduce((acc, project) => {
    project.types.forEach((type) => {
      if (!acc.includes(type)) {
        acc.push(type);
      }
    });
    return acc;
  }, []);

  return (
    <Container id="work" className="skills-container" my={16} maxW="container.xl">
        <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}  mt={2}>
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
          Projects
        </Text>
      </Heading>
      <Text fontSize="xl" className="subheading">
        Here are some of my projects.
      </Text>
      <HStack wrap="nowrap" justify="center" mt={{ base:8,md:0,lg:0 }}>
        {/* <Tag
          colorScheme="teal"
          borderRadius="full"
          size="lg"
          px={{ base: 4, md: 8 }}
          variant={filter === "all" ? "solid" : "outline"}
          onClick={() => setFilter("all")}
          cursor="pointer"
        >
          <TagLabel fontWeight="semibold">All</TagLabel>
        </Tag> */}
        {projectTypes.map((type) => (
          <Tag
            key={type}
            colorScheme="teal"
            borderRadius="full"
            size="lg"
            px={{ base: 4, md: 8 }}
            variant={filter === type ? "solid" : "outline"}
            onClick={() => setFilter(type)}
            cursor="pointer"
            fontWeight="semibold"
          >
            {type}
          </Tag>
        ))}
      </HStack>
      <SimpleGrid columns={[1, 2, 3]} mt={8} spacing={8}>
        {filterProjects(projects, filter).map((project) => (
          <Box
            key={project.name}
            className="project-card"
            borderWidth="1px"
            borderColor="gray.200"
            rounded="lg"
            p={4}
            shadow="md"
            borderRadius="xl"
          >
            <Tilt perspective={1000}    glareEnable="true" className="parallax-effect">
            <Image
              src={project.image}
              alt={project.name}
              width="100%"
              height={64}
              objectFit="fill"
              borderRadius="lg"
              shadow="lg"
            />
            </Tilt>
            <Heading as="h3" size="lg" mt={4} color="teal.600" >
              {project.name}
            </Heading>
            <Box minH={28}>
            <Text fontSize="md" mt={2}color="gray.600">
              {project.description}
            </Text>
            </Box>
            <HStack isInline spacing={4} my={4} wrap="wrap" justifyContent="start" mx={2}>
              {project.tags.map((type) => (
                <Tag
                  style={{
                    marginBottom: "16px",
                    marginLeft:"4px",
                    marginRight:"4px",
                  }}
                  key={type}
                  colorScheme="teal"
                  borderRadius="full"
                  size="md"
                  px={{ base: 4, md: 4 }}
                  variant="solid"
                  shadow="md"
                 
                >
                  {type}
                </Tag>
              ))}
            </HStack>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
}
