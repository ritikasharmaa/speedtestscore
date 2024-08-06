import { Box, Button, Text, Flex, CloseButton } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import CustomGradientButton from "./CustomGradientButton";

const CookieConsentBox: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Show the cookie box when the component mounts
  }, []);

  const handleAccept = () => {
    // Handle cookie acceptance logic here
    setIsVisible(false);
  };

  const handleReadMore = () => {
    // Handle read more action here
  };

  return (
    isVisible && (
      <Box
        position="fixed"
        bottom="20px"
        right="20px"
        bg="#1a202c"
        color="white"
        p={4}
        borderRadius="md"
        boxShadow="md"
        zIndex="1000"
        maxWidth="700px"
      >
        <Flex justify="space-between" align="center">
          <Text fontWeight="bold">Cookies Policy</Text>
          <CloseButton onClick={() => setIsVisible(false)} />
        </Flex>
        <Text mt={2}>
          SpeedScore.net uses cookies to improve your browsing experience and to
          analyze our traffic. By clicking &quot;Accept All Cookies,&quot; you
          consent to the storing of cookies on your device to enhance site
          navigation, analyze site usage, and assist in our marketing efforts.
        </Text>
        <Flex mt={4} gap={4}>
          <Button
            bgGradient="linear(to-r, #34BDE3, #0379CC)"
            color="white"
            _hover={{ bgGradient: "linear(to-r, #0379CC, #34BDE3)" }}
            sx={{ transition: "all 3s ease-in-out" }}
            onClick={handleAccept}
          >
            Accept All Cookies
          </Button>
          <CustomGradientButton
            text="Read More"
            width={{ base: "auto", md: 40 }}
            onClick={handleReadMore}
          />
        </Flex>
      </Box>
    )
  );
};

export default CookieConsentBox;
