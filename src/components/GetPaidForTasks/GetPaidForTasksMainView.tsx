"use client";
import React from "react";

import {
  Box,
  Flex,
  HStack,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Image from "next/image";

import LaptopDataTable from "./LaptopDataTable";
import PageComponent from "../PageComponent";
import VerticalTypeAd from "../VerticalTypeAd";

const GetPaidForTasksMainView = () => {
  return (
    <PageComponent
      left={<VerticalTypeAd />}
      right={<VerticalTypeAd marginDirection="right" />}
    >
      <Flex direction={"column"} width={"100%"}>
        <Box width={"100%"} mb={4}>
          <Text fontSize="32px" fontWeight={"500"} textAlign={"center"}>
            Get paid for tests
          </Text>
        </Box>
        <Box>
          <Text fontSize="20px" fontWeight={"500"} textAlign={"left"}>
            We invite you to be a part of the Speedscore.net community by
            submitting your speed test results. Your participation helps us
            ensure accuracy and improve the services we offer to users
            worldwide.
          </Text>
        </Box>

        <Stack gap={3} my={8} direction={{ base: "column", md: "row" }}>
          <Box
            width={{ base: "100%", md: "40%" }}
            background={"#242C3C"}
            borderRadius={5}
            p={3}
          >
            <Image
              src={"/images/Map.svg"}
              width={100}
              height={100}
              style={{ width: "100%" }}
              alt="World Map"
            />
          </Box>

          <Box width={{ base: "100%", md: "60%" }}>
            <Box mt={5}>
              <Text fontSize="16px" fontWeight={"500"} textAlign={"left"}>
                Why Submit Your Speed Test Results?
              </Text>
            </Box>

            <List ml={6} spacing={3} styleType="disc" padding="1rem">
              <ListItem>
                <Text fontSize="14px" fontWeight={"400"}>
                  Contribute to Network Accuracy: Your speed test results help
                  us provide more accurate data and insights on internet speeds
                  across different regions.
                </Text>
              </ListItem>
              <ListItem>
                <Text fontSize="14px" fontWeight={"400"}>
                  Improve Service Quality: By sharing your speed test results,
                  you help us identify areas where improvements are needed,
                  leading to better service quality for all users.
                </Text>
              </ListItem>
              <ListItem>
                <Text fontSize="14px" fontWeight={"400"}>
                  Support Your Community: Your data assists in creating a
                  reliable network performance map, helping others make informed
                  decisions about their internet service providers.
                </Text>
              </ListItem>
            </List>
          </Box>
        </Stack>

        <Box>
          <Box my={5}>
            <Text fontSize="16px" fontWeight={"500"} textAlign={"left"}>
              How to Submit Your Speed Test Results
            </Text>
          </Box>

          <List ml={4} spacing={3} styleType="disc" padding="1px">
            <ListItem>
              <Text fontSize="14px" fontWeight={"400"}>
                Run a Speed Test: Use our Speedscore.net speed test tool to
                measure your internet connection&apos;s performance.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize="14px" fontWeight={"400"}>
                Collect Results: Once the test is complete, you&apos;ll receive
                detailed results showing your download speed, upload speed, and
                ping.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize="14px" fontWeight={"400"}>
                Submit Your Data: Fill out the form below to submit your speed
                test results. Please include the following information:
              </Text>
              <List ml={6} spacing={3} styleType="disc" padding="1rem">
                <ListItem>
                  <Text fontSize="14px" fontWeight={"400"}>
                    Test Results: Upload a screenshot or enter your download
                    speed, upload speed, and ping.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text fontSize="14px" fontWeight={"400"}>
                    Location: Provide your city and country to help us map
                    network performance.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text fontSize="14px" fontWeight={"400"}>
                    ISP: Share the name of your internet service provider.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text fontSize="14px" fontWeight={"400"}>
                    Contact Information: Enter your email and phone number
                    (optional) for our Speedscore.net Conflict Arbitration Team.
                    Your identity will not be revealed to the ISP without your
                    permission if an arbitration is requested by the service
                    provider.
                  </Text>
                </ListItem>
              </List>
            </ListItem>
          </List>
        </Box>

        <Box>
          <Text
            bgGradient="linear(to-r, #34BDE3, #0379CC)"
            bgClip="text"
            fontSize={{ base: "14px", lg: "16px", xl: "20px" }}
            fontWeight={"500"}
            mt={10}
          >
            Laptop Full Data
          </Text>

          <LaptopDataTable />
        </Box>

        <Box>
          <Text
            bgGradient="linear(to-r, #34BDE3, #0379CC)"
            bgClip="text"
            fontSize={{ base: "14px", lg: "16px", xl: "20px" }}
            fontWeight={"500"}
            mt={10}
          >
            Mobile Partial Data
          </Text>

          <LaptopDataTable />
        </Box>

        <Box mt={10}>
          <Text fontSize="22px" fontWeight={"500"}>
            Confidentiality Notice
          </Text>

          <Text fontSize="18px" fontWeight={"400"} mt={5}>
            Your identity will not be revealed to the ISP without your
            permission if an arbitration is requested by the service provider.
            We value your privacy and ensure that your data is handled securely
            and responsibly.
          </Text>

          <Text fontSize="18px" fontWeight={"400"} mt={5}>
            Thank you for contributing to the Speedscore.net community.
            Together, we can improve internet services for everyone!
          </Text>
        </Box>
      </Flex>
    </PageComponent>
  );
};

export default GetPaidForTasksMainView;
