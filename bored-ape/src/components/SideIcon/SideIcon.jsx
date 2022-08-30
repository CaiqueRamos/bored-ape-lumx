import React from "react";
import { Text, Image, VStack } from "@chakra-ui/react";

export const SideIcon = ({ icon, title, select, onClick = () => {} }) => {
  return select ? (
    <VStack w="15" cursor="pointer" p="2" rounded="5" mt="2" bgColor="grey.300">
      <Image src={icon} />
      <Text fontSize="xs" color="grey.600" fontWeight="600" textAlign="center">
        {title}
      </Text>
    </VStack>
  ) : (
    <VStack
      onClick={onClick}
      w="15"
      cursor="pointer"
      p="2"
      rounded="5"
      mt="2"
      _hover={{ bgColor: "grey.300", color: "grey.600" }}
    >
      <Image src={icon} />
      <Text fontSize="xs" color="grey.400" fontWeight="600" textAlign="center">
        {title}
      </Text>
    </VStack>
  );
};
