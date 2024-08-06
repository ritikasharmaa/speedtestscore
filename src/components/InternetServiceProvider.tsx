import {
  Box,
  Text,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  useDisclosure,
  HStack,
  Icon,
} from "@chakra-ui/react";
import StartChatNowModal from "./Modal/StartChatNowModal";
import { BiSupport } from "react-icons/bi";
import StatusIndicator from "./StatusIndicator";

const InternetServiceProvider: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        w="100%"
        p={{ base: "14px 10px", md: "20px" }}
        borderRadius={8}
        color="white"
        display={"flex"}
        flexDirection={"column"}
        gap={5}
        bg={"var(--secondary-bg-color)"}
      >
        <Box>
          <StatusIndicator isOnline={true} />
          <HStack spacing={1} alignItems={"flex-start"}>
            <Icon as={BiSupport} mt={1} boxSize={{ base: 5, md: 4 }} />
            <Text fontSize={{ base: "20px", md: "16px" }} fontWeight={"500"}>
              Wifi Support Chat
            </Text>
          </HStack>
          <Text fontSize={{ base: "18px", md: "15px" }} fontWeight={"400"}>
            Voice and video availbale
          </Text>

          <Box
            background={"white"}
            height={{ base: "192px", md: "146px" }}
            borderRadius={6}
            my={5}
          ></Box>

          <Text fontSize="12px" fontWeight={"400"}>
            Fast device support without waiting on hold with your service
            provider.
          </Text>

          <Box marginY={5}>
            <Button
              bgGradient="linear(to-r, #34BDE3, #0379CC)"
              color="white"
              _hover={{ bgGradient: "linear(to-r, #0379CC, #34BDE3)" }}
              sx={{ transition: "all 3s ease-in-out" }}
              width={"100%"}
              onClick={onOpen}
              fontSize={{ base: "14px", md: "16px" }}
            >
              Start Chat Now
            </Button>
          </Box>

          <Box display={"flex"} flexDirection={"column"} gap={2}>
            <Text fontSize="14px" fontWeight={"500"} color={"white"}>
              Run Most Recent Tests in this Session
            </Text>

            <Text fontSize="12px" fontWeight={"400"} color={"white"}>
              Run multiple tests for best average score.
            </Text>
          </Box>

          <Box mt={3}>
            <Accordion allowToggle>
              <AccordionItem border={"none"}>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <Text fontSize="14px" fontWeight={"500"} color={"white"}>
                        Test 1
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel fontSize="12px" pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem border={"none"}>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <Text fontSize="14px" fontWeight={"500"} color={"white"}>
                        Test 2
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel fontSize="12px" pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Box>
      </Box>
      <StartChatNowModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default InternetServiceProvider;
