import { Box, HStack, Flex } from "@chakra-ui/react";
import React from "react";
import { UserInfo } from "../UserInfo/UserInfo";
import { PriceEth } from "../PriceEth/PriceEth";
import { useMediaContext } from "../../hooks/useMediaContext.js";

export const Main = () => {
  const { isDesktop } = useMediaContext();
  return (
    <Box w="full" p={isDesktop ? "13.5" : "4"}>
      <Box mb="16">
        <UserInfo name="Bored Ape Yacht Club" userKey="0x6080b4.s01993825..." />
      </Box>
      <PriceEth />
    </Box>
  );
};
