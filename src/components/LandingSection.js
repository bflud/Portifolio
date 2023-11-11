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
        <Avatar src="https://scontent.faru4-2.fna.fbcdn.net/v/t39.30808-6/391570378_5962440217191905_5235036135826968279_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEUtzQsGqIGNVY0UYetwwQetu7l7uncb9227uXu6dxv3RMYY2futAAwNEGUz6c1goFpR4aZgw88qcP5jDGhQ8qR&_nc_ohc=Etnp2deWIgMAX97_UoH&_nc_ht=scontent.faru4-2.fna&oh=00_AfDAjQIP6t3-OBKKv4hnRk5oBEi78ntHdfn_4r5s4fBVwA&oe=6553FB7A" size="2xl" name="Bruno" />
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
