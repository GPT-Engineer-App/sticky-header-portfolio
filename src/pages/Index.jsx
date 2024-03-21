import React from "react";
import { Box, Flex, Heading, Text, Button, Image, Link, Stack, useColorModeValue } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Sticky Header */}
      <Box as="header" position="fixed" top={0} left={0} right={0} zIndex={999} bg={useColorModeValue("white", "gray.800")} boxShadow="md" py={4} px={8}>
        <Flex justify="space-between" align="center">
          <Heading as="h1" size="lg">
            John Doe
          </Heading>
          <Stack as="nav" direction="row" spacing={8}>
            <Link href="#about">About</Link>
            <Link href="#portfolio">Portfolio</Link>
            <Link href="#blog">Blog</Link>
            <Link href="#contact">Contact</Link>
          </Stack>
        </Flex>
      </Box>

      {/* About Section */}
      <Box as="section" id="about" pt={24} px={8}>
        <Flex direction={["column", "row"]} align="center" justify="space-between">
          <Box flex={1} mb={[8, 0]}>
            <Heading as="h2" size="xl" mb={4}>
              About Me
            </Heading>
            <Text fontSize="lg">Hi, I'm John Doe, a passionate programmer with expertise in web development. I love creating elegant and efficient solutions to complex problems.</Text>
          </Box>
          <Box flex={1}>
            <Image src="https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWVyJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzEwOTk2NTk0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Programmer" borderRadius="full" boxSize={["200px", "300px"]} />
          </Box>
        </Flex>
      </Box>

      {/* Portfolio Section */}
      <Box as="section" id="portfolio" py={16} px={8}>
        <Heading as="h2" size="xl" mb={8}>
          Portfolio
        </Heading>
        {/* Add portfolio projects */}
      </Box>

      {/* Blog Section */}
      <Box as="section" id="blog" py={16} px={8}>
        <Heading as="h2" size="xl" mb={8}>
          Blog
        </Heading>
        {/* Add blog posts */}
      </Box>

      {/* Contact Section */}
      <Box as="section" id="contact" py={16} px={8}>
        <Heading as="h2" size="xl" mb={8}>
          Contact Me
        </Heading>
        <Stack direction="row" spacing={4}>
          <Link href="https://github.com/johndoe" isExternal>
            <Button leftIcon={<FaGithub />} colorScheme="gray">
              GitHub
            </Button>
          </Link>
          <Link href="https://linkedin.com/in/johndoe" isExternal>
            <Button leftIcon={<FaLinkedin />} colorScheme="linkedin">
              LinkedIn
            </Button>
          </Link>
          <Link href="mailto:john@example.com">
            <Button leftIcon={<FaEnvelope />} colorScheme="red">
              Email
            </Button>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};

export default Index;
