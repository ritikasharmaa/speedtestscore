import { androidIcon, appleIcon } from "@/app/assets/svg";
import { QuestionOutlineIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

const LeftSideBar: React.FC = () => {
  return (
    <>
      <Box
        w="100%"
        p="20px"
        borderRadius={8}
        color="white"
        display={"flex"}
        flexDirection={"column"}
        gap={5}
        bg={"var(--secondary-bg-color)"}
      >
        <Box>
          <HStack spacing={1} alignItems={"flex-start"}>
            <Icon
              as={QuestionOutlineIcon}
              mt={1}
              boxSize={{ base: 5, md: 4 }}
            />

            <Text fontSize={{ base: "20px", md: "16px" }} fontWeight={"500"}>
              View Our How to Videos
            </Text>
          </HStack>
          <Box mt={5} mb={4}>
            <Text fontSize={{ base: "20px", md: "16px" }} fontWeight={"500"}>
              HP1
            </Text>
            <Box
              background={"white"}
              height={{ base: "192px", md: "146px" }}
              borderRadius={6}
            />
          </Box>

          <Box mt={5} mb={4}>
            <Text fontSize={{ base: "20px", md: "16px" }} fontWeight={"500"}>
              HP2
            </Text>
            <Box
              background={"white"}
              height={{ base: "192px", md: "146px" }}
              borderRadius={6}
            />
          </Box>

          <Text fontSize="16px" fontWeight={{ base: "500", md: "400" }}>
            Custom pre programmed Wifi Systems Shipped to Your door
          </Text>
          <Box
            background={"white"}
            height={{ base: "192px", md: "146px" }}
            borderRadius={6}
            my={2}
          />
        </Box>
      </Box>
      <VStack
        w="100%"
        p="20px"
        borderRadius={8}
        color="white"
        display={"flex"}
        flexDirection={"column"}
        gap={5}
        bg={"var(--secondary-bg-color)"}
      >
        <Text fontSize="14px" fontWeight={"500"}>
          Also test on your mobile
        </Text>

        <HStack spacing={4}>
          <Button
            p={0}
            width={"auto"}
            background={"none"}
            _hover={{ background: "none" }}
          >
            <Image src={androidIcon} alt="android" sizes="40" />
          </Button>
          <Button p={0} background={"none"} _hover={{ background: "none" }}>
            <Image src={appleIcon} alt="apple" sizes="40" />
          </Button>
        </HStack>

        <Text fontSize="14px" fontWeight={"500"}>
          Download nPref app
        </Text>
      </VStack>
    </>
  );
};

export default LeftSideBar;
