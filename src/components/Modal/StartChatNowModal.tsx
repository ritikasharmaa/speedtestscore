import { Box, Checkbox, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import CustomGradientButton from '../ui/CustomGradientButton';
import GradientText from '../ui/GradientText';
import { TfiHeadphoneAlt } from "react-icons/tfi";
import GradientBackgroundButton from '../ui/GradientBackgroundButton';
import TermsModal from './TermsModal'; // Import the new TermsModal component

interface StartChatNowModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const StartChatNowModal: React.FC<StartChatNowModalProps> = ({ isOpen, onClose }) => {
  const [isTermsOpen, setIsTermsOpen] = useState(false); // State to control Terms modal

  const handleTermsClick = () => {
    setIsTermsOpen(true);
  };

  const handleTermsClose = () => {
    setIsTermsOpen(false);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered blockScrollOnMount={false}>
        <ModalOverlay />
        <ModalContent maxW={'800px'} maxH={'95%'} overflowY={'auto'}>
          <ModalHeader>
            <Text
              fontSize='26px'
              textAlign={'center'}
            >
              Start Chat Now
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box mt={5} mb={3}>
              <Text
                fontSize="16px"
                fontWeight="400"
                color="white"
                textAlign="center"
              >
                Chat with 20 year service provider veteran and digital nomad Telecom CEO Eric, for help resolving home network and device issues.
              </Text>

              <Text
                fontSize="16px"
                fontWeight="400"
                color="white"
                textAlign="center"
                mt={7}
                px={{ base: 0, md: 14 }}
              >
                Please download
                <span> <GradientText text='WhatsApp' /> </span>
                for Eric to reach you without long distance cost. Other chat options can be arranged after first contact.
              </Text>



              <Box display={'flex'} justifyContent={'center'} alignItems={'center'} mt={5}>
                <CustomGradientButton text='Download WhatsApp' />
              </Box>

              <Box
                bg={'var(--secondary-bg-color)'}
                borderRadius={20}
                display={'flex'}
                p={5}
                mt={5}
                alignItems={'start'}
                gap={5}
              >
                <Box>
                  <TfiHeadphoneAlt fontSize={'25px'} />
                </Box>
                <Box
                  flex={1}
                >
                  <Text
                    fontSize={'20px'}
                    fontWeight={500}
                  >
                    Eric
                  </Text>
                  <Text
                    fontSize={'18px'}
                    fontWeight={400}
                  >
                    20 years Service Provider Veteran & Telecom CEO
                  </Text>
                </Box>
                <Box>
                  <GradientText text='Online' />
                </Box>
              </Box>

              <Box>
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={2} mt={2}>
                  <Box bg={'var(--secondary-bg-color)'} borderRadius={20} p={5}>
                    <Text
                      fontSize={'17px'}
                      fontWeight={500}
                    >
                      Callers in queue
                    </Text>
                    <Text
                      fontSize={'24px'}
                      fontWeight={500}
                      mt={3}
                    >
                      5
                    </Text>
                  </Box>
                  <Box bg={'var(--secondary-bg-color)'} borderRadius={20} p={5}>
                    <Text
                      fontSize={'17px'}
                      fontWeight={500}
                    >
                      Time since online
                    </Text>
                    <Text
                      fontSize={'24px'}
                      fontWeight={500}
                      mt={3}
                    >
                      10 min
                    </Text>
                  </Box>
                  <Box bg={'var(--secondary-bg-color)'} borderRadius={20} p={5}>
                    <Text
                      fontSize={'17px'}
                      fontWeight={500}
                    >
                      Expected return time
                    </Text>
                    <Text
                      fontSize={'24px'}
                      fontWeight={500}
                      mt={3}
                    >
                      20 min
                    </Text>
                  </Box>
                </SimpleGrid>
              </Box>

              <Box>
                <Text
                  fontSize="18px"
                  fontWeight="400"
                  color="white"
                  textAlign="center"
                  my={7}
                >
                  Each Session up to 10 minutes starts at $8 with $1 refunded per 30 minutes waiting for Eric&apos;s call back.
                </Text>
              </Box>


              <Box my={5}>
                <GradientText text='Note' />
                <Text
                  fontSize="16px"
                  fontWeight="400"
                  color="white"
                  textAlign="left"
                  mt={2}
                >
                  Starting a chat while offline status on will not count towards Call back time refund, but will start from when Return to online expected time shown. If wait reaches 2 hours the order is considered un serviceable and full refund is issued. This is a hobby gig just helping people in my down time, I hope my timing lines up for you:)
                </Text>
              </Box>

              <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={3} my={3}>
                <Checkbox
                  iconColor="white"
                  iconSize="sm"
                  _checked={{
                    bg: "blue.500",
                    borderColor: "blue.500",
                  }}
                  _focus={{
                    boxShadow: "none",
                  }}
                />
                <Text
                  fontSize="16px"
                  fontWeight="400"
                  color="white"
                  textAlign="center"
                >
                  I agree to the
                  <span onClick={handleTermsClick} style={{ cursor: 'pointer' }}> <GradientText text='Terms and Conditions' /> </span>
                </Text>

              </Box>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Box display="flex" justifyContent="center" alignItems="center" gap={3} width="100%">
              <>
                <GradientBackgroundButton text='Start Chat' width={120} onClick={onClose} />
                <CustomGradientButton text="Cancel" width={120} onClick={onClose} />
              </>
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <TermsModal isOpen={isTermsOpen} onClose={handleTermsClose} />
    </>
  );
};

export default StartChatNowModal;
