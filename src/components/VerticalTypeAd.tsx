"use client";
import React from "react";
import { Box, Flex } from "@chakra-ui/react";

type VerticalTypeAdProp = {
  marginDirection?: string;
};
const VerticalTypeAd: React.FC<VerticalTypeAdProp> = ({
  marginDirection = "left",
}) => {
  return (
    <Flex flexDirection={"column"}>
      <Box
        as="section"
        bg="white"
        shadow="md"
        py={5}
        width={40}
        h={"600px"}
        {...(marginDirection === "left"
          ? { marginLeft: 10 }
          : { marginRight: 10 })}
      />
    </Flex>
  );
};

export default VerticalTypeAd;
