import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Olá, sou Bruno Fernando";
const bio1 = "Desenvolvedor Full Stack";
const bio2 = "Certificado pela Meta";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#751CEC"
  >

    <VStack spacing={16}>
      <VStack spacing={4}>
        <Avatar src="/img/bf.jpg" size="2xl" name="Bruno" />
        <Heading as="h4" size="md" noOfLines={1}>{greeting}</Heading>
      </VStack>
      <VStack spacing={6}>
        <Heading as="h1" size="4xl" noOfLines={1}>{bio1}</Heading>
        <Heading as="h1" size="4xl" noOfLines={1}>{bio2}</Heading>
      </VStack>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
