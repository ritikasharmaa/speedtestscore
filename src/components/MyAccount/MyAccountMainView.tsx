import React from "react";

import { Box, Flex, SimpleGrid, Text, Tooltip } from "@chakra-ui/react";
import CustomGradientButton from "../ui/CustomGradientButton";
import TestResultTable from "./TestResultTable";
import { IoIosInformationCircleOutline } from "react-icons/io";
import Link from "next/link";
import PageComponent from "../PageComponent";
import VerticalTypeAd from "../VerticalTypeAd";

const MyAccountMainView = () => {
  return (
    <PageComponent
      left={<VerticalTypeAd />}
      right={<VerticalTypeAd marginDirection="right" />}
    >
      <Flex direction={"column"} width={"100%"}>
        <Box width={"100%"} mb={4}>
          <Text fontSize="28px" fontWeight={"500"} textAlign={"center"}>
            Your Account
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box background="#242C3C" borderRadius={5} p={7}>
            <Flex flexDirection={"column"}>
              <Text fontSize="36px" fontWeight={"500"} textAlign={"center"}>
                12,3456
              </Text>

              <Text
                fontSize="20px"
                fontWeight={"500"}
                textAlign={"center"}
                mt={5}
              >
                Account submissions
              </Text>

              <Flex justifyContent={"center"} alignItems={"center"} gap={3}>
                <Text
                  bgGradient="linear(to-r, #34BDE3, #0379CC)"
                  bgClip="text"
                  fontSize={{ base: "14px", lg: "16px", xl: "16px" }}
                  fontWeight={"500"}
                  mt={5}
                  textAlign={"center"}
                >
                  Tier Level 3
                </Text>
                <Box mt={4} pt={1}>
                  <Tooltip
                    label="Here is the tier description."
                    background={"#1A202C"}
                    color={"white"}
                    borderRadius={"5px"}
                    p={2}
                    fontSize="md"
                  >
                    <IoIosInformationCircleOutline
                      color="#34BDE3"
                      size={"16px"}
                    />
                  </Tooltip>
                </Box>
              </Flex>
            </Flex>
          </Box>
          <Box background="#242C3C" borderRadius={5} p={7}>
            <Flex flexDirection={"column"}>
              <Text fontSize="36px" fontWeight={"500"} textAlign={"center"}>
                $24.00
              </Text>

              <Text
                fontSize="20px"
                fontWeight={"500"}
                textAlign={"center"}
                mt={5}
              >
                Revenue from Refferals
              </Text>

              <Flex justifyContent={"center"} alignItems={"center"} gap={3}>
                <Text
                  bgGradient="linear(to-r, #34BDE3, #0379CC)"
                  bgClip="text"
                  fontSize={{ base: "14px", lg: "16px", xl: "16px" }}
                  fontWeight={"500"}
                  mt={5}
                  textAlign={"center"}
                >
                  Nr. of referrals:8
                </Text>
                <Box mt={4} pt={1}>
                  <Tooltip
                    label="Here is the tier description."
                    background={"#1A202C"}
                    color={"white"}
                    borderRadius={"5px"}
                    p={2}
                    fontSize="md"
                  >
                    <IoIosInformationCircleOutline
                      color="#34BDE3"
                      size={"16px"}
                    />
                  </Tooltip>
                </Box>
              </Flex>
            </Flex>
          </Box>
          <Box background="#242C3C" borderRadius={5} p={7}>
            <Text fontSize="36px" fontWeight={"500"} textAlign={"center"}>
              $0.00
            </Text>

            <Text
              fontSize="20px"
              fontWeight={"500"}
              textAlign={"center"}
              mt={5}
            >
              Account Balance
            </Text>

            <Box
              mt={5}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Link href={"/my-account/payment-history"}>
                <CustomGradientButton
                  text="Payment History"
                  fontSize={"14px"}
                />
              </Link>
            </Box>
          </Box>
        </SimpleGrid>

        <Box mt={5}>
          <Text fontSize="24px" fontWeight={"500"} mt={5}>
            Tests Results Charts
          </Text>

          <TestResultTable />
        </Box>
      </Flex>
    </PageComponent>
  );
};

export default MyAccountMainView;
