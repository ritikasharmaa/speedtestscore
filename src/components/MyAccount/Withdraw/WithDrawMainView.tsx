"use client";

import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import CustomCompanyComponent from "./CustomCompanyComponent";
import PageComponent from "@/components/PageComponent";
import VerticalTypeAd from "@/components/VerticalTypeAd";

const WithDrawMainView = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.marginRight = "-15px";
      return () => {
        document.body.style.overflow = "auto";
        document.body.style.marginRight = "0px";
      };
    }
  }, [isOpen]);

  return (
    <>
      <PageComponent
        left={<VerticalTypeAd />}
        right={<VerticalTypeAd marginDirection="right" />}
      >
        <Flex direction={"column"} width={"100%"}>
          <Box width={"100%"} mb={4}>
            <Text fontSize="28px" fontWeight={"500"} textAlign={"center"}>
              Withdraw
            </Text>
          </Box>

          <Box>
            <Box
              display={"flex"}
              flexDirection={{ base: "column", md: "row" }}
              justifyContent={"space-between"}
              alignItems={"center"}
              my={5}
            >
              <Text fontSize="22px" fontWeight={"500"} textAlign={"left"}>
                Speedscore Distributes your test credits with Giftbit for
                instant delivery.
              </Text>

              <Button
                bgGradient="linear(to-r, #34BDE3, #0379CC)"
                color="white"
                width={{ base: "100%", md: "auto" }}
                _hover={{
                  bgGradient: "linear(to-r, #0379CC, #34BDE3)",
                }}
                sx={{
                  transition: "all 3s ease-in-out",
                }}
                onClick={onOpen}
              >
                Withdraw Now
              </Button>
            </Box>

            <Text fontSize="18px" fontWeight={"400"} textAlign={"left"} my={5}>
              Please select which brand you wish to receive your credit for and
              you will receive an instantly issued E-giftcard to your account
              email. E-gift cards are loadable in your APPLE PAY or Samsung Pay
              wallets for immediate use. Minimum $5 is required for issurance.
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={6}>
            <CustomCompanyComponent
              title="Amazon"
              logo="/logos/amazon.svg"
              size={150}
            />
            <CustomCompanyComponent
              title="Starbucks"
              logo="/logos/starbucks.svg"
              size={50}
            />
            <CustomCompanyComponent
              title="Airbnb"
              logo="/logos/airbnb.svg"
              size={150}
            />
            <CustomCompanyComponent
              title="Adidas"
              logo="/logos/adidas.svg"
              size={70}
            />

            <CustomCompanyComponent
              title="Amazon"
              logo="/logos/amazon.svg"
              size={150}
            />
            <CustomCompanyComponent
              title="Starbucks"
              logo="/logos/starbucks.svg"
              size={50}
            />
            <CustomCompanyComponent
              title="Airbnb"
              logo="/logos/airbnb.svg"
              size={150}
            />
            <CustomCompanyComponent
              title="Adidas"
              logo="/logos/adidas.svg"
              size={70}
            />

            <CustomCompanyComponent
              title="Amazon"
              logo="/logos/amazon.svg"
              size={150}
            />
            <CustomCompanyComponent
              title="Starbucks"
              logo="/logos/starbucks.svg"
              size={50}
            />
            <CustomCompanyComponent
              title="Airbnb"
              logo="/logos/airbnb.svg"
              size={150}
            />
            <CustomCompanyComponent
              title="Adidas"
              logo="/logos/adidas.svg"
              size={70}
            />
          </SimpleGrid>
        </Flex>
      </PageComponent>
      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent p={4}>
          <ModalCloseButton />
          <ModalBody>
            <Box mt={5} mb={3}>
              <Text
                fontSize="23px"
                fontWeight="500"
                color="white"
                textAlign="center"
              >
                Your balance has been transferred to Giftbit
              </Text>

              <Text
                fontSize="14px"
                fontWeight="400"
                color="white"
                textAlign="center"
                mt={5}
                width={"70%"}
                mx={"auto"}
              >
                You will receive an email from Giftbit shortly to select your
                instantly issues E-gift card.
              </Text>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default WithDrawMainView;
