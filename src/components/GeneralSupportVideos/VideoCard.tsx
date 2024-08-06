"use client";
import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";

interface TVideoCard {
  title: string;
  description: string;
  onClick: () => void;
}
const VideoCard = ({ title, description, onClick }: TVideoCard) => {
  return (
    <Box
      width="100%"
      p={{ base: "10px", md: "16px" }}
      borderRadius={"12px"}
      color="white"
      backgroundColor="#1a202c"
      gap={{ base: "4px", md: "12px" }}
    >
      {/* white box */}
      <Box
        cursor={"pointer"}
        onClick={onClick}
        background={"#D3D1D1"}
        width={"100%"}
        height={{ base: "261px", md: "172px" }}
        mb={4}
        borderRadius={{ base: "4px", md: "6px" }}
      ></Box>
      <Stack spacing={{ base: "6px", md: "16px" }}>
        <Text
          fontSize="16px"
          fontWeight={"500"}
          color={"white"}
          textAlign={"left"}
          noOfLines={2}
        >
          {title}
        </Text>

        <Text
          fontSize={{ base: "12px", md: "14px" }}
          fontWeight={"400"}
          color={"white"}
          textAlign={"left"}
          noOfLines={2}
        >
          {description}
        </Text>

        <Text
          bgGradient="linear(to-r, #34BDE3, #0379CC)"
          bgClip="text"
          fontSize={"14px"}
          fontWeight={"500"}
          cursor={"pointer"}
          textAlign={"left"}
        >
          See More
        </Text>
      </Stack>
    </Box>
  );
};

export default VideoCard;
