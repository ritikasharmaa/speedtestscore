"use client";
import {
  Box,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CustomGradientButton from "../ui/CustomGradientButton";
import { FaNetworkWired, FaWifi } from "react-icons/fa";

type Location = {
  latitude: number | null;
  longitude: number | null;
};

interface StartTestModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const StartTestModal: React.FC<StartTestModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(0);

  const [showMaunalDetailsForm, setShowMaunalDetailsForm] = useState(false);

  const [connectionType, setConnectionType] = useState<string | null>(null);

  const [locationType, setLocationType] = useState<string | null>(null);

  const [city, setCity] = useState<string>("");

  const [isDeviceLocloading, setDeviceLocLoading] = useState<boolean>(false);

  //get the current location
  const [location, setLocation] = useState<Location>({
    latitude: null,
    longitude: null,
  });

  const [error, setError] = useState<string | null>(null);

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleSubmitDetails = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleConnectionType = (type: string) => {
    setConnectionType(type);
    handleNextStep();
  };

  const getCurrentLocation = () => {
    setDeviceLocLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setDeviceLocLoading(false);
          handleNextStep();
        },
        (error) => {
          setError(error.message);
          setDeviceLocLoading(false);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
      setDeviceLocLoading(false);
    }
  };

  const handleLocationType = (type: string) => {
    setLocationType(type);
    if (type === "manual") {
      setShowMaunalDetailsForm(true);
    } else {
      setShowMaunalDetailsForm(false);
      getCurrentLocation();
    }
  };

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

  useEffect(() => {
    if (!isOpen) {
      setStep(0);
      setShowMaunalDetailsForm(false);
    }
  }, [isOpen]);

  const renderStepContent = () => {
    switch (step) {
      case 0:
        return (
          <Box mt={5} mb={3}>
            <Text
              fontSize="23px"
              fontWeight="500"
              color="white"
              textAlign="center"
            >
              Please select what type of test this was
            </Text>
          </Box>
        );
      case 1:
        return (
          <>
            <Box mt={5} mb={3}>
              <Text
                fontSize="23px"
                fontWeight="500"
                color="white"
                textAlign="center"
                width={{ base: "100%", md: "85%" }}
                mx="auto"
              >
                Please allow us to enter your location of this test
              </Text>
            </Box>
          </>
        );
      case 2:
        return (
          <Box mt={5} mb={3}>
            <Text
              fontSize="23px"
              fontWeight="500"
              color="white"
              textAlign="center"
            >
              Your submission was accepted!
            </Text>
            <Text
              fontSize="14px"
              fontWeight="400"
              color="white"
              textAlign="center"
              mt={6}
            >
              The payment will be releases in next 24h.
            </Text>
          </Box>
        );
      default:
        return null;
    }
  };
  const renderFooterButtons = () => {
    switch (step) {
      case 0:
        return (
          <>
            <CustomGradientButton
              onClick={() => handleConnectionType("wifi")}
              text="Wi-fi Connection"
              icon={<FaWifi />}
            />
            <CustomGradientButton
              onClick={() => handleConnectionType("wired")}
              text="Wired Connection"
              icon={<FaNetworkWired />}
            />
          </>
        );
      case 1:
        return (
          <>
            <CustomGradientButton
              // onClick={onClose}
              onClick={() => handleLocationType("device")}
              text="Use Device Location"
              isLoading={isDeviceLocloading}
            />
            {!showMaunalDetailsForm && (
              <CustomGradientButton
                // onClick={() => setShowMaunalDetailsForm(true)}
                onClick={() => handleLocationType("manual")}
                text="Enter Manually"
              />
            )}
            {showMaunalDetailsForm && (
              <Button
                bgGradient="linear(to-r, #34BDE3, #0379CC)"
                color="white"
                _hover={{
                  bgGradient: "linear(to-r, #0379CC, #34BDE3)",
                }}
                sx={{
                  transition: "all 3s ease-in-out",
                }}
              >
                Enter Manually
              </Button>
            )}
          </>
        );
      default:
        return null;
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
      <ModalOverlay />
      <ModalContent p={4}>
        <ModalCloseButton />
        <ModalBody>{renderStepContent()}</ModalBody>
        <ModalFooter>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={3}
            width="100%"
          >
            {renderFooterButtons()}
          </Box>
        </ModalFooter>
        {showMaunalDetailsForm && step == 1 && (
          <Box mt={4}>
            <label>City</label>
            <Input mt={1} background={"#1A202C"} placeholder="Toronto" />
            <Box
              width={"100%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={3}
              mt={4}
            >
              <Button
                bgGradient="linear(to-r, #34BDE3, #0379CC)"
                color="white"
                _hover={{
                  bgGradient: "linear(to-r, #0379CC, #34BDE3)",
                }}
                sx={{
                  transition: "all 3s ease-in-out",
                }}
                width={"150px"}
                onClick={handleSubmitDetails}
              >
                Submit
              </Button>
              <CustomGradientButton
                onClick={onClose}
                text="Cancel"
                width={"150px"}
              />
            </Box>
          </Box>
        )}
      </ModalContent>
    </Modal>
  );
};
export default StartTestModal;
