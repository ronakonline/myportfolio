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

function filterProjects(projects, filter) {
  if (filter === "all") {
    return projects;
  }
  return projects.filter((projects) => projects.types.includes(filter));
}

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const projects = [
    {
      name: "Project 1",
      types: ["web", "mobile"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "https://source.unsplash.com/random",
    },
    {
      name: "Project 2",
      types: ["web", "codeigniter"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "https://source.unsplash.com/random",
    },
    {
      name: "Project 3",
      types: ["web", "mobile"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "https://source.unsplash.com/random",
    },
    {
      name: "Project 4",
      types: ["web", "mobile"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "https://source.unsplash.com/random",
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
        <Tag
          colorScheme="teal"
          borderRadius="full"
          size="lg"
          px={{ base: 4, md: 8 }}
          variant={filter === "all" ? "solid" : "outline"}
          onClick={() => setFilter("all")}
          cursor="pointer"
        >
          <TagLabel fontWeight="semibold">All</TagLabel>
        </Tag>
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
              objectFit="cover"
              borderRadius="lg"
              shadow="lg"
            />
            </Tilt>
            <Heading as="h3" size="lg" mt={4} color="teal.600" >
              {project.name}
            </Heading>
            <Text fontSize="md" mt={2}color="gray.600">
              {project.description}
            </Text>
            <Stack isInline spacing={4} my={4}>
              {project.types.map((type) => (
                <Tag

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
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
}
