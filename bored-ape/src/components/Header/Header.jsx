import React from "react";
import {
  Text,
  Flex,
  Image,
  Divider,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

export const Header = ({ image, gwei }) => {
  return (
    <Flex background="grey.200" w="full">
      <Flex
        justifyContent="center"
        align="center"
        w="20"
        h="18"
        borderRight={`2px solid #4E4B66`}
      >
        <Image src={image} w="6" h="6" />
      </Flex>
      <Flex
        color="white"
        px="8"
        py="2.5"
        w="full"
        justifyContent="space-between"
      >
        <InputGroup w="96">
          <InputLeftElement
            pointerEvents="none"
            pt="2.5"
            children={<Search2Icon color="gray.300" />}
          />
          <Input h="full" placeholder="Search collections" />
        </InputGroup>
        <Flex>
          <Flex>
            <Text
              css={`
                font-family: "manrope";
              `}
            >
              {gwei}
            </Text>
            <Text
              css={`
                font-family: "manrope";
              `}
            >
              gwei
            </Text>
          </Flex>
          <Divider orientation="vertical" bx="14" />
          <Flex>
            <Text>{gwei}</Text>
            <Text>gwei</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
