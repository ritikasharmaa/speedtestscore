import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { IoArrowBackSharp } from "react-icons/io5";

interface TBackLink {
  text: string;
  url: string;
}
const BackLink: React.FC<TBackLink> = ({ text, url }) => {
  return (
    <Box mb={5}>
      <Link href={url}>
        <Box display={"inline"}>
          <Box width={"100%"} display={"flex"} alignItems={"center"} gap={2}>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <IoArrowBackSharp color="#34BDE3" size={"16px"} />
            </Box>
            <Text fontSize="14px" fontWeight={"500"} textAlign={"left"}>
              {text}
            </Text>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

export default BackLink;
