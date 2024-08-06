import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Grid,
  Box,
} from "@chakra-ui/react";

interface TVideoModal {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string | null;
}
const VideoModal: React.FC<TVideoModal> = ({ isOpen, onClose, videoUrl }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="6xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Watch Video</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Grid
            templateRows="repeat(3, auto) 1fr auto"
            templateColumns={{ base: "1fr", md: "1fr 3fr 1fr" }}
            gap={3}
            paddingBottom={4}
          >
            {/* Top box */}
            <Box gridRow="1" gridColumn="1 / 4" bg="white" height="100px" />

            {/* Left box */}
            <Box
              display={{ base: "none", md: "block" }}
              gridRow="3"
              gridColumn="1"
              bg="white"
              height="100%"
            />

            {/* Centered iframe */}
            {videoUrl && (
              <Box
                gridRow="3"
                gridColumn={{ base: "1 / -1", md: "auto" }}
                display="flex"
                justifyContent="center"
                alignItems="center"
                width={"100%"}
              >
                <iframe
                  width="100%"
                  height="400px"
                  src={videoUrl}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Box>
            )}

            {/* Right box */}
            <Box
              display={{ base: "none", md: "block" }}
              gridRow="3"
              gridColumn="3"
              bg="white"
              height="100%"
            />

            {/* Bottom box */}
            <Box gridRow="5" gridColumn="1 / 4" bg="white" height="100px" />
          </Grid>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default VideoModal;
