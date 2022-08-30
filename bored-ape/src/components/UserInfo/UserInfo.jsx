import { Box, Text, Input, Flex, Image } from "@chakra-ui/react";
import React from "react";
import avatar from "../../dist/img/avatar.png";
import copy from "../../dist/img/copy.svg";
import { useClipboard } from "@chakra-ui/react";

import userIconBoat from "../../dist/img/userIconBoat.svg";
import userIconDesktop from "../../dist/img/userIconDesktop.svg";
import userIconGraph from "../../dist/img/userIconGraph.svg";
import { ValueUserInfo } from "../valueUserInfo/ValueUseInfo";

export const UserInfo = ({ name, userKey }) => {
  const { hasCopied, onCopy } = useClipboard(userKey);

  const valuesUSer = [
    {
      title: "LIFETIME",
      value: "453d",
      columnIcon: false,
    },
    {
      title: "ITEMS",
      value: "10K",
      columnIcon: false,
    },
    {
      title: "FLOOR",
      value: "145",
      columnIcon: true,
    },
    {
      title: "ROYALTES",
      value: "7,5%",
      columnIcon: false,
    },
    {
      title: "VOL24H",
      value: "1.581K",
      columnIcon: true,
      prevAvaliationValue: "12,02%",
      prevAvaliation: true,
    },
    {
      title: "VOL7D",
      value: "12.9K",
      columnIcon: true,
      prevAvaliationValue: "1,29%",
      prevAvaliation: false,
    },
  ];

  return (
    <Flex
      m="16"
      bgColor="grey.200"
      h="30"
      w="full"
      p="6"
      justifyContent="space-between"
    >
      <Flex alignItems="center">
        <Image
          borderRadius="full"
          boxSize="18"
          src={avatar}
          alt="Avata do usuario "
          mr="6"
        />
        <Box mr="12">
          <Text fontSize="18" color="grey.700">
            {name}
          </Text>
          <Flex>
            <Text fontSize="sm" color="grey.400" mr="2.5">
              {userKey}
            </Text>
            <Image src={copy} cursor="pointer" onClick={onCopy} />
          </Flex>
        </Box>
        <Flex>
          <Image src={userIconBoat} mr="1.5" />
          <Image src={userIconDesktop} mr="1.5" />
          <Image src={userIconGraph} mr="1.5" />
        </Flex>
      </Flex>
      <Flex>
        {valuesUSer.map((e) => {
          return (
            <Box ml="14.5">
              <ValueUserInfo
                title={e.title}
                value={e.value}
                columnIcon={e.columnIcon}
                prevAvaliation={e.prevAvaliation}
                prevAvaliationValue={e.prevAvaliationValue}
              />
            </Box>
          );
        })}
      </Flex>
    </Flex>
  );
};
