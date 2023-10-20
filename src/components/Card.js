import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack bg="#FFFFFF" borderRadius="lg" color="#000000" alignItems="start">
      <Image src={imageSrc} alt={title} borderRadius="lg" width="100%" />
      <VStack spacing="3" p="4" align="start">
        <Heading size="md">{title}</Heading>
        <Text color="#808080">{description}</Text>
        <HStack spacing="2">
          <Text>See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
