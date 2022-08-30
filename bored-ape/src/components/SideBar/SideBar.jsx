import React from "react";
import { Text, Flex } from "@chakra-ui/react";
import { useMediaContext } from "../../hooks/useMediaContext.js";

export const SideBar = (props) => {
  const { isDesktop } = useMediaContext();
  return isDesktop ? (
    <Flex
      background="grey.200"
      w="79px"
      h="142vh"
      borderTop={`1.5px solid #4E4B66`}
      justifyContent="flex-start"
      alignItems="center"
      flexDirection="column"
      pt="6"
    >
      {props.children}
    </Flex> 
  ) : (
    <></>
  );
};
