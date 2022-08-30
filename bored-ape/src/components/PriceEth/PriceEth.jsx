import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { Graph } from "./Graph/Graph";
import { data01, data02, data03 } from "./data";
import { useMediaContext } from "../../hooks/useMediaContext.js";

export const PriceEth = () => {
  const params = ["24H", "7D", "30D", "90D", "6M", "ALL"];
  const { isDesktop } = useMediaContext();

  return isDesktop ? (
    <Box>
      <Flex
        bgColor="grey.200"
        h="24"
        justifyContent="space-between"
        p="6"
        mb="6"
      >
        <Box>
          <Text fontSize="lg" color="grey.700" fontWeight="bold">
            Sales
          </Text>
          <Text fontSize="lg" color="grey.400" fontWeight="bold">
            Showing 2300 sales.
          </Text>
        </Box>
        <Flex alignItems="center">
          <Flex w="15" alignItems="baseline">
            <Text fontSize="xxs" color="grey.400" fontWeight="bold" mr="6">
              Time:
            </Text>
          </Flex>
          {params.map((e, index) => {
            return index === 0 ? (
              <Flex
                mx="1"
                w="13"
                h="9"
                justifyContent="center"
                alignItems="center"
                cursor="pointer"
                bgColor="grey.300"
                rounded="2"
              >
                <Text color="grey.700" fontWeight="bold">
                  {e}
                </Text>
              </Flex>
            ) : (
              <Flex
                mx="1"
                w="13"
                h="9"
                justifyContent="center"
                alignItems="center"
                cursor="pointer"
                _hover={{ background: "grey.300", rounded: "2" }}
              >
                <Text color="grey.400" fontWeight="bold">
                  {e}
                </Text>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
      <Box h="112" bgColor="grey.200" p="6" pb="20">
        <Flex justifyContent="space-between" mb="5" mx="5">
          <Text fontSize="lg" color="grey.400" fontWeight="bold">
            PRICE IN ETH
          </Text>
          <Flex alignItems="baseline">
            <Text fontSize="xxs" color="grey.400" fontWeight="bold" mr="3">
              Outliers:
            </Text>
            <Flex
              w="12"
              h="9"
              justifyContent="center"
              alignItems="center"
              cursor="pointer"
              bgColor="grey.700"
              rounded="2"
            >
              <Text color="grey.300" fontWeight="bold">
                ON
              </Text>
            </Flex>
            <Flex
              w="12"
              h="9"
              justifyContent="center"
              alignItems="center"
              cursor="pointer"
              bgColor="grey.300"
              rounded="2"
            >
              <Text color="grey.400" fontWeight="bold">
                OFF
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Graph data01={data01} data02={data02} data03={data03} />
      </Box>
    </Box>
  ) : (
    <Box>
      <Flex
        bgColor="grey.200"
        h="24"
        justifyContent="space-between"
        flexDirection="column"
        p="3"
        mb="6"
      >
        <Flex justifyContent="space-between">
          <Text fontSize="lg" color="grey.700" fontWeight="bold">
            Sales
          </Text>
          <Text fontSize="lg" color="grey.400" fontWeight="bold">
            Showing 2300 sales.
          </Text>
        </Flex>
        <Flex justifyContent="space-between" alignItems="baseline">
          <Text fontSize="xxs" color="grey.400" fontWeight="bold" mr="6">
            Time:
          </Text>
          <Flex>
            {params.map((e, index) => {
              return index === 0 ? (
                <Flex
                  mx="1"
                  w="13"
                  h="9"
                  justifyContent="center"
                  alignItems="center"
                  cursor="pointer"
                  bgColor="grey.300"
                  rounded="2"
                >
                  <Text color="grey.700" fontWeight="bold">
                    {e}
                  </Text>
                </Flex>
              ) : (
                index <= 1 && (
                  <Flex
                    mx="1"
                    w="13"
                    h="9"
                    justifyContent="center"
                    alignItems="center"
                    cursor="pointer"
                    _hover={{ background: "grey.300", rounded: "2" }}
                  >
                    <Text color="grey.400" fontWeight="bold">
                      {e}
                    </Text>
                  </Flex>
                )
              );
            })}
          </Flex>
        </Flex>
      </Flex>
      <Box h="112" bgColor="grey.200" pt="4" pb="20">
        <Flex justifyContent="space-between"  mb="5" alignItems="center" mx="5">
          <Text fontSize="xs" color="grey.400" fontWeight="bold">
            PRICE IN ETH
          </Text>
          <Flex alignItems="center" >
            <Text fontSize="xxs" color="grey.400" fontWeight="bold" mr="3">
              Outliers:
            </Text>
            <Flex
              w="12"
              h="9"
              justifyContent="center"
              alignItems="center"
              cursor="pointer"
              bgColor="grey.700"
              rounded="2"
            >
              <Text color="grey.300" fontWeight="bold">
                ON
              </Text>
            </Flex>
            <Flex
              w="12"
              h="9"
              justifyContent="center"
              alignItems="center"
              cursor="pointer"
              bgColor="grey.300"
              rounded="2"
            >
              <Text color="grey.400" fontWeight="bold">
                OFF
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Graph data01={data01} data02={data02} data03={data03} />
      </Box>
    </Box>
  );
};
