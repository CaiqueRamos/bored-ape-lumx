import React from "react";
import { Box, Text, Input, Flex, Image } from "@chakra-ui/react";

import barColumns from "../../dist/img/barColumns.svg";
import downArrow from "../../dist/img/downArrow.svg";
import upArrow from "../../dist/img/upArrow.svg";

export const ValueUserInfo = ({
  title,
  value,
  columnIcon,
  prevAvaliation,
  prevAvaliationValue,
}) => {
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center">
      <Text color="grey.400" fontWeight="bold" fontSize="xxs">
        {title}
      </Text>
      <Flex>
        {columnIcon && <Image src={barColumns} mr="1" />}
        <Text color="grey.700" fontWeight="bold" fontSize="lg">
          {value}
        </Text>
      </Flex>
      {prevAvaliationValue && (
        <Box>
          {prevAvaliation ? (
            <Flex>
              <Image src={upArrow} mr="2.5" />
              <Text color="avaliation.green">{prevAvaliationValue}</Text>
            </Flex>
          ) : (
            <Flex>
              <Image src={downArrow} mr="2.5" />
              <Text color="avaliation.red">{prevAvaliationValue}</Text>
            </Flex>
          )}
          ;
        </Box>
      )}
    </Flex>
  );
};
