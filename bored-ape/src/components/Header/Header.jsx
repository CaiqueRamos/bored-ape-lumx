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
import logo from "../../dist/img/logo.svg";
import rightColumns from "../../dist/img/rightColumns.svg";

export const Header = ({ gwei, user }) => {
  return (
    <Flex background="grey.200" w="full">
      <Flex
        justifyContent="center"
        align="center"
        w="20"
        h="18"
        borderRight={`1.5px solid #4E4B66`}
      >
        <Image src={logo} w="6" h="6" />
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
          <Input
            background="grey.100"
            h="full"
            placeholder="Search collections"
            fontWeight="bold"
            border={`1px solid #4E4B66 !important`}
          />
        </InputGroup>
        <Flex mr="20.5" alignItems="center" fontSize="lg" fontWeight="bold">
          <Flex>
            <Text color="grey.500" fontWeight="bold">
              {gwei}
            </Text>
            &nbsp;
            <Text color="grey.400">gwei</Text>
          </Flex>
          <Divider orientation="vertical" mx="14" h="4.5" />
          <Flex>
            <Text color="grey.500" mr="5">
              {user}
            </Text>
            <Image src={rightColumns} />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
