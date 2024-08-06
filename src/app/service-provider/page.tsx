"use client";
import AddVideoModal from "@/components/Modal/AddVideoModal";

import StarRating from "@/components/StarRating";
import SpeedTest from "@/components/SpeedTest";
import CustomGradientButton from "@/components/ui/CustomGradientButton";
import GradientBackgroundButton from "@/components/ui/GradientBackgroundButton";

import { PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import PageComponent from "@/components/PageComponent";
import VerticalTypeAd from "@/components/VerticalTypeAd";

const ServiceProviderPage = () => {
  const [rating, setRating] = useState(4);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <PageComponent
        left={<VerticalTypeAd />}
        right={<VerticalTypeAd marginDirection="right" />}
      >
        <Flex direction={"column"} width={"100%"}>
          <Box width={"100%"}>
            <Text fontSize="28px" fontWeight={"500"} textAlign={"center"}>
              Search for your service provider
            </Text>
          </Box>

          <Box
            width={{ base: "100%", md: "50%", lg: "40%" }}
            mx={"auto"}
            mt={4}
          >
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <SearchIcon />
              </InputLeftElement>
              <Input
                type="tel"
                variant={"filled"}
                placeholder="Search For your provider...."
              />
            </InputGroup>
          </Box>

          <Box>
            <Box mt={10}>
              <Text fontSize="24px" fontWeight={"500"}>
                Provider Name
              </Text>

              <Text fontSize="18px" fontWeight={"400"}>
                Provider description goes here... Detailed text about the
                provider and services.
              </Text>

              <Box
                display={"flex"}
                flexDirection={"row"}
                flexWrap={"wrap"}
                gap={4}
                mt={4}
              >
                <CustomGradientButton text="Coverage Area" />
                <CustomGradientButton text="Sales Page" />
                <CustomGradientButton text="Support Contact" />
              </Box>
            </Box>

            <Box
              display={"flex"}
              flexDirection={{ base: "column", md: "row" }}
              justifyContent={"space-between"}
              mt={10}
              alignItems={{ base: "left", md: "center" }}
            >
              <Box display={"flex"} gap={2} flexDirection={"column"}>
                <Text fontSize="22px" fontWeight={"500"}>
                  Leave a review for Provider Name
                </Text>
                <Flex alignItems={"center"} gap={3}>
                  <StarRating rating={rating} setRating={setRating} size={30} />
                  <Text fontSize="22px" fontWeight={"500"}>
                    ({rating}/5)
                  </Text>
                </Flex>
              </Box>

              <Link href={"/service-provider/leave-a-review"}>
                <Button
                  bgGradient="linear(to-r, #34BDE3, #0379CC)"
                  color="white"
                  _hover={{
                    bgGradient: "linear(to-r, #0379CC, #34BDE3)",
                  }}
                  sx={{
                    transition: "all 3s ease-in-out",
                  }}
                  mt={{ base: "10px", md: "0" }}
                  width={{ base: "100%", md: "auto" }}
                >
                  Leave a Review
                </Button>
              </Link>
            </Box>

            <Box
              mt={10}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={{ base: "center", md: "start" }}
              flexDirection={{ base: "row", md: "column" }}
            >
              <Box order={{ base: 2, md: 1 }}>
                <Button
                  bgGradient="linear(to-r, #34BDE3, #0379CC)"
                  color="white"
                  _hover={{
                    bgGradient: "linear(to-r, #0379CC, #34BDE3)",
                  }}
                  sx={{
                    transition: "all 3s ease-in-out",
                  }}
                  width={{ base: "100%", md: "auto" }}
                >
                  Support Chat
                </Button>
              </Box>

              <Box order={{ base: 1, md: 2 }}>
                <Text
                  fontSize="16px"
                  fontWeight={"400"}
                  mt={{ base: 0, md: 4 }}
                >
                  Average Response time: 24h
                </Text>
              </Box>
            </Box>

            <Box>
              <Flex
                alignItems={"center"}
                gap={3}
                flexDirection={{ base: "column", md: "row" }}
                justifyContent={"space-between"}
                my={10}
              >
                <Text fontSize="22px" fontWeight={"500"} textAlign={"left"}>
                  This page is not managed by the service provider!
                </Text>
                <CustomGradientButton
                  width={{ base: "100%", md: "auto" }}
                  text="Claim This Page Now"
                />
              </Flex>
            </Box>

            <Box>
              <Flex
                alignItems={"center"}
                gap={3}
                flexDirection={{ base: "column", md: "row" }}
                justifyContent={"space-between"}
                mt={5}
              >
                <Text fontSize="22px" fontWeight={"500"} textAlign={"left"}>
                  Your Videos
                </Text>
                <GradientBackgroundButton
                  onClick={onOpen}
                  width={{ base: "100%", md: "auto" }}
                  text="Add Video"
                />
              </Flex>
            </Box>
          </Box>

          <Box
            mt={5}
            width="100%"
            p="20px"
            borderRadius={8}
            color="white"
            backgroundColor="#1a202c"
          >
            <Box
              background={"#D3D1D1"}
              width={"100%"}
              height={700}
              mb={4}
            ></Box>
            <Box background={"#242C3C"} borderRadius={5} p={3}>
              <Text
                fontSize="24px"
                fontWeight={"500"}
                textAlign={"left"}
                mb={2}
              >
                Why Does Your Internet Connection Randomly Stop Working?
              </Text>

              <Text
                fontSize="14px"
                fontWeight={"400"}
                textAlign={"left"}
                width={{ base: "100%", md: "60%" }}
              >
                Ever wonder why your Wi-Fi suddenly cuts out without
                warning?Freshbooks message: Head over to
                http://freshbooks.com/techquickie and don’t forget to enter Tech
                Quickie in the “How Did You Hear About Us” section when signing
                up for your free trial.
              </Text>

              <Text
                bgGradient="linear(to-r, #34BDE3, #0379CC)"
                bgClip="text"
                fontSize={"14px"}
                fontWeight={"500"}
                mt={4}
                cursor={"pointer"}
                textAlign={"left"}
              >
                See More
              </Text>
            </Box>
          </Box>
        </Flex>
      </PageComponent>
      <SpeedTest />
      <AddVideoModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default ServiceProviderPage;
