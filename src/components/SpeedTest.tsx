"use client";

import {
  Box,
  Text,
  Flex,
  Button,
  CircularProgress,
  useDisclosure,
} from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import styles from "./SpeedTest.module.css";
import { fonts } from "@/app/_theme/fonts";
import StarRating from "./StarRating";
import { FaSync } from "react-icons/fa";
import ServerDetails from "./ServerDetails";
import CustomGradientButton from "./ui/CustomGradientButton";
import { BiShareAlt } from "react-icons/bi";
import StartTestModal from "./Modal/StartTestModal";

type TestData = {
  id: string;
  isp: string;
  download_avg: number;
  download_peak: number;
  upload_avg: number;
  upload_peak: number;
  latency: number;
  latency_avg: number;
  latency_jitter: number;
  pool_id: string;
};

const SpeedTest = () => {
  const [rating, setRating] = useState(3);
  const [testData, setTestData] = useState<TestData | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const socket = useRef<WebSocket | null>(null);

  useEffect(() => {
    // Establish WebSocket connection
    // socket.current = new WebSocket('wss://ws.nperf.com/partner/ws?l=9a0727ac-ef4e-4ba3-a14d-048c720a600e');
    socket.current = new WebSocket(
      "wss://in-snu-greaternoida-01-10g.nperf.net:8443/wsock"
    );

    socket.current.onopen = () => {
      console.log("WebSocket connection established");
    };

    socket.current.onmessage = (event) => {
      const data = JSON.parse(event.data) as TestData;
      console.log("Speed test data:", data);
      // Handle the incoming data and update your UI accordingly
      setTestData(data as TestData);
    };

    socket.current.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    socket.current.onclose = () => {
      console.log("WebSocket connection closed");
    };

    return () => {
      if (socket.current) {
        socket.current.close();
      }
    };
  }, []);

  const startTest = () => {
    if (socket.current && socket.current.readyState === WebSocket.OPEN) {
      // Send a command to start the test
      socket.current.send(JSON.stringify({ action: "start_test" }));
    }
    // onOpen();
  };

  return (
    <Box
      width="100%"
      p="20px"
      borderRadius={8}
      color="white"
      backgroundColor="#1a202c"
    >
      <ServerDetails />
      <Box className={styles.circleContainer}>
        {/* Outer Circular Labels */}
        <Text className={`${styles.circularLabel} ${styles.labelTop}`}>80</Text>
        <Text className={`${styles.circularLabel} ${styles.labelBottom}`}>
          0
        </Text>
        <Text className={`${styles.circularLabel} ${styles.labelLeft}`}>
          05
        </Text>
        <Text className={`${styles.circularLabel} ${styles.labelRight}`}>
          80
        </Text>
        <Text className={`${styles.circularLabel} ${styles.labelBottomRight}`}>
          80Gb
        </Text>
        <CircularProgress
          value={testData ? testData?.download_avg / 1000 : 0}
          size="100%"
          thickness="15px"
          color="cyan.400"
          trackColor="rgba(0,0,0,0.3)"
          className={`${styles.circularProgress}`}
        >
          <Box
            className={styles.innerCircle}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Flex justify={"center"}>
              <Text
                onClick={startTest}
                cursor="pointer"
                fontSize={"28px"}
                fontWeight={"500"}
                fontFamily={fonts.rubik.style.fontFamily}
              >
                {"Start Test"}
              </Text>
            </Flex>
          </Box>
        </CircularProgress>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={5}
        mb={7}
      >
        <CustomGradientButton text="Share" icon={<BiShareAlt />} />
        <CustomGradientButton text="Refresh" icon={<FaSync />} />
      </Box>
      <div>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Box>
            <Text fontSize="20px" fontWeight={"500"} color={"white"}>
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
              _hover={{ bgGradient: "linear(to-r, #0379CC, #34BDE3)" }}
              sx={{ transition: "all 3s ease-in-out" }}
            >
              Submit
            </Button>
          </Box>
        </Flex>
        <Box mt={8}>
          <Text fontSize="20px" fontWeight={"500"} color={"white"}>
            Submit result for payment?
          </Text>
        </Box>
        <Flex gap={5} mt={3}>
          <Button
            bgGradient="linear(to-r, #34BDE3, #0379CC)"
            color="white"
            _hover={{ bgGradient: "linear(to-r, #0379CC, #34BDE3)" }}
            sx={{ transition: "all 3s ease-in-out" }}
            onClick={onOpen}
          >
            Submit
          </Button>
          <Button
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
      {/* Modal */}
      <StartTestModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default SpeedTest;
