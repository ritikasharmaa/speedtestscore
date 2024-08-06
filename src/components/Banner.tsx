"use client";

import { Box, Flex, Button, Text, useColorMode } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { fonts } from "@/app/_theme/fonts";

const Banner = () => {
  // const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      as="header"
      bgGradient="linear(to-r, #34BDE3, #0379CC)"
      shadow="md"
      py={5}
    >
      <Flex
        maxW="1268px"
        mx="auto"
        align="center"
        justifyContent={"center"}
        gap={"20px"}
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Text
          fontSize="20px"
          fontWeight={"500"}
          fontFamily={fonts.rubik.style.fontFamily}
          lineHeight={"24px"}
        >
          Get paid to help collect network data!
        </Text>
        <Button color={'white'} bg={"#1A202C"} py={"10px"} size={"sm"} gap={2}>
          <InfoOutlineIcon />
          More Info Here
        </Button>
      </Flex>
    </Box>
  );
};

export default Banner;
