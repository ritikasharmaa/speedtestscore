"use client";
import ReviewAcceptModal from "@/components/Modal/ReviewAcceptModal";
import PageComponent from "@/components/PageComponent";
import StarRating from "@/components/StarRating";
import CustomGradientButton from "@/components/ui/CustomGradientButton";
import VerticalTypeAd from "@/components/VerticalTypeAd";

import { PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";

const LeaveAReviewPage = () => {
  const [rating, setRating] = useState(4);
  const [newRating, setNewRating] = useState(0);

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
          </Box>

          <Box
            mt={5}
            width="100%"
            p="20px"
            borderRadius={8}
            color="white"
            backgroundColor="#1a202c"
          >
            <Box marginY={5}>
              <Text
                fontSize="18px"
                fontWeight={"500"}
                textAlign={"left"}
                mb={2}
              >
                How many start would you rate Provider Name?
              </Text>

              <Box>
                <Flex alignItems={"center"} gap={3}>
                  <StarRating
                    rating={newRating}
                    setRating={setNewRating}
                    size={30}
                  />
                  <Text fontSize="18px" fontWeight={"400"}>
                    ({rating}/5)
                  </Text>
                </Flex>
              </Box>
            </Box>

            <Box marginY={10}>
              <Text
                fontSize="18px"
                fontWeight={"500"}
                textAlign={"left"}
                mb={2}
              >
                Would you recommend Provider Name?
              </Text>

              <Flex flexDirection={"row"} gap={5}>
                <CustomGradientButton width={40} text="Yes" />
                <CustomGradientButton width={40} text="No" />
              </Flex>
            </Box>

            <Box marginY={10}>
              <Text
                fontSize="18px"
                fontWeight={"500"}
                textAlign={"left"}
                mb={1}
              >
                Care to share more?
              </Text>

              <Text
                fontSize="13px"
                fontWeight={"400"}
                textAlign={"left"}
                mb={2}
              >
                How was your overall experience?
              </Text>

              <Textarea
                placeholder="Your review here..."
                background={"#242C3C"}
                border={"none"}
                rows={5}
                mb={5}
              />

              <Flex flexDirection={"row"} gap={5}>
                <Button
                  bgGradient="linear(to-r, #34BDE3, #0379CC)"
                  color="white"
                  _hover={{ bgGradient: "linear(to-r, #0379CC, #34BDE3)" }}
                  sx={{ transition: "all 3s ease-in-out" }}
                  onClick={onOpen}
                >
                  Submit Review
                </Button>
                <Link href={"/service-provider"}>
                  <CustomGradientButton width={40} text="Cancel" />
                </Link>
              </Flex>
            </Box>

            <Box>
              <Box
                display={"flex"}
                gap={2}
                flexDirection={{ base: "column", md: "row" }}
                justifyContent={"space-between"}
              >
                <Text fontSize="22px" fontWeight={"500"}>
                  Overall rating for Provider Name
                </Text>
                <Flex alignItems={"center"} gap={3}>
                  <StarRating rating={rating} setRating={setRating} size={30} />
                  <Text fontSize="22px" fontWeight={"500"}>
                    ({rating}/5)
                  </Text>
                </Flex>
              </Box>
            </Box>

            <Box display={"flex"} flexDirection={"column"} gap={4} my={5}>
              <Flex alignItems={"center"} gap={3}>
                <StarRating rating={4} size={30} />
                <Text fontSize="22px" fontWeight={"500"}>
                  ({4}/5)
                </Text>
              </Flex>
              <Text fontSize="16px" fontWeight={"400"}>
                “Additionally, the user interface of their website is intuitive
                and easy to navigate. I can easily monitor my usage, view my
                billing history, and even access helpful troubleshooting
                guides.”
              </Text>

              <Text fontSize="16px" fontWeight={"500"}>
                Andrew Brook
              </Text>
            </Box>

            <Box display={"flex"} flexDirection={"column"} gap={4} my={5}>
              <Flex alignItems={"center"} gap={3}>
                <StarRating rating={4} size={30} />
                <Text fontSize="22px" fontWeight={"500"}>
                  ({4}/5)
                </Text>
              </Flex>
              <Text fontSize="16px" fontWeight={"400"}>
                “Additionally, the user interface of their website is intuitive
                and easy to navigate. I can easily monitor my usage, view my
                billing history, and even access helpful troubleshooting
                guides.”
              </Text>

              <Text fontSize="16px" fontWeight={"500"}>
                Andrew Brook
              </Text>
            </Box>

            <Box display={"flex"} flexDirection={"column"} gap={4} my={5}>
              <Flex alignItems={"center"} gap={3}>
                <StarRating rating={4} size={30} />
                <Text fontSize="22px" fontWeight={"500"}>
                  ({4}/5)
                </Text>
              </Flex>
              <Text fontSize="16px" fontWeight={"400"}>
                “Additionally, the user interface of their website is intuitive
                and easy to navigate. I can easily monitor my usage, view my
                billing history, and even access helpful troubleshooting
                guides.”
              </Text>

              <Text fontSize="16px" fontWeight={"500"}>
                Andrew Brook
              </Text>
            </Box>
          </Box>
        </Flex>
      </PageComponent>
      <ReviewAcceptModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default LeaveAReviewPage;
