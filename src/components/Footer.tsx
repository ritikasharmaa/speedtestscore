"use client";

import { Box, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      as="footer"
      bg="gray.800"
      py={4}
      shadow="md"
      mt={4}
    >
      <Flex maxW="1200px" mx="auto" align="center" justify="center">
        <Text fontSize="sm" color="white">
          © {new Date().getFullYear()} SpeedScore.net. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
