"use client";

import { Suspense, useState } from "react";
import {
  Box,
  Button,
  Flex,
  GridItem,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";

import "./globals.css";

import SpeedTest from "@/components/Test/SpeedTest";
import StarRating from "@/components/StarRating";
import StartTestModal from "@/components/Modal/StartTestModal";
import CookieConsentBox from "@/components/ui/CookieConsentBox";
import AuthModalWrapper from "@/components/Modal/AuthModal/AuthModalWrapper";
import Demo from "@/components/Demo";
import InternetServiceProvider from "@/components/InternetServiceProvider";
import PageComponent from "@/components/PageComponent";
import HorizontalTypeAd from "@/components/HorizontalTypeAd";
import VerticalTypeAd from "@/components/VerticalTypeAd";
import LeftSideBar from "@/components/LeftSideBar";

export default function Home() {
  const [rating, setRating] = useState(4);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  return (
    <>
      <PageComponent
        top={<HorizontalTypeAd />}
        left={<VerticalTypeAd />}
        right={<VerticalTypeAd marginDirection="right" />}
        bottom={<HorizontalTypeAd />}
      >
        <Flex justify="center" align="center" w="100%">
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={4}
            maxW="1200px"
            w="100%"
            gridTemplateColumns={{
              base: "1fr",
              md: "1fr 2fr",
              lg: "1fr 2fr 1fr",
            }}
          >
            <GridItem order={{ base: 3, md: 1 }}>
              <Flex direction={"column"} gap={5}>
                <LeftSideBar />
              </Flex>
            </GridItem>
            <GridItem order={{ base: 1, md: 2 }}>
              <div className="mx-auto">
                <Box
                  display={"flex"}
                  alignItems={{ base: "center", md: "end" }}
                  flexDirection={"column"}
                  gap={5}
                  w="100%"
                >
                  <SpeedTest />
                  <Demo />
                  <Box
                    width={{ base: "100%", md: 500, xl: 600 }}
                    p={{ base: "10px", md: "20px" }}
                    borderRadius={8}
                    color="white"
                    backgroundColor="#1a202c"
                  >
                    <div>
                      <Flex
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <Box>
                          <Text
                            fontSize="20px"
                            fontWeight={"500"}
                            color={"white"}
                          >
                            Leave a Review for ISP Name
                          </Text>
                          <Box mt={3}>
                            <StarRating
                              rating={rating}
                              setRating={setRating}
                              count={5}
                              size={30}
                            />
                          </Box>
                        </Box>
                        <Box>
                          <Button
                            bgGradient="linear(to-r, #34BDE3, #0379CC)"
                            color="white"
                            _hover={{
                              bgGradient: "linear(to-r, #0379CC, #34BDE3)",
                            }}
                            sx={{ transition: "all 3s ease-in-out" }}
                          >
                            Submit
                          </Button>
                        </Box>
                      </Flex>
                      <Box mt={8}>
                        <Text
                          fontSize="20px"
                          fontWeight={"500"}
                          color={"white"}
                        >
                          Submit result for payment?
                        </Text>
                      </Box>
                      <Flex
                        flexDirection={{ base: "column", md: "row" }}
                        gap={5}
                        mt={3}
                      >
                        <Button
                          bgGradient="linear(to-r, #34BDE3, #0379CC)"
                          color="white"
                          _hover={{
                            bgGradient: "linear(to-r, #0379CC, #34BDE3)",
                          }}
                          sx={{ transition: "all 3s ease-in-out" }}
                          onClick={onOpen}
                        >
                          Submit
                        </Button>
                        <Button
                          onClick={() => router.push("/live-test-map")}
                          bg="transparent"
                          size="md"
                          variant={"outline"}
                          _hover={{
                            bg: "transparent",
                            bgGradient: "linear(to-r, #0379CC, #34BDE3)",
                            bgClip: "text",
                          }}
                          sx={{
                            border: "2px solid #34BDE3",
                            borderImageSlice: 1,
                            borderWidth: "2px",
                            borderRadius: "md",
                            transition: "all 0.3s ease-in-out",
                            color: "transparent",
                            bgGradient: "linear(to-r, #34BDE3, #0379CC)",
                            bgClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                          }}
                        >
                          View live test map of nearby tests
                        </Button>
                      </Flex>
                    </div>
                  </Box>
                </Box>
              </div>
            </GridItem>

            <GridItem order={{ base: 2, md: 3 }}>
              <Flex direction={"column"} gap={5}>
                <InternetServiceProvider />
              </Flex>
            </GridItem>
          </SimpleGrid>
        </Flex>

        <StartTestModal isOpen={isOpen} onClose={onClose} />
      </PageComponent>
      <CookieConsentBox />
      <Suspense>
        <AuthModalWrapper />
      </Suspense>
    </>
  );
}
