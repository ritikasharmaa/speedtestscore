import { Box, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react';
import React from 'react';
import CustomGradientButton from '../ui/CustomGradientButton';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const termsAndConditions = [
  {
    title: "Acceptance of Terms",
    description: "By accessing or using SpeedScore.net, you agree to be bound by these terms and conditions and our Privacy Policy. If you do not agree with any part of these terms, you must not use our website."
  },
  {
    title: "Services",
    description: "SpeedScore.net provides assistance with home network and device issues through chat sessions with Eric, a 20-year service provider veteran and digital nomad Telecom CEO. Each session is up to 10 minutes and starts at $8, with a $1 refund per 30 minutes waiting for Eric’s callback"
  },
  {
    title: "Payment and Refunds",
    description: "Payment: Each session costs $8 for up to 10 minutes. Payments are processed through Stripe. Refunds: $1 will be refunded for every 30 minutes you wait for Eric’s callback. If the wait reaches 2 hours, the order is considered unserviceable, and a full refund will be issued. Conditions: Starting a chat while Eric is offline will not count towards callback time refund, but will start from when Eric returns online."
  },
  {
    title: "User Responsibilities You agree to",
    description: "Provide accurate information during the chat session. Not misuse the services provided by SpeedScore.net. Respect Eric’s time and follow the guidelines provided during the chat."
  },
  {
    title: "Use of WhatsApp",
    description: "You are required to download WhatsApp for cost-effective communication with Eric. Other chat options can be arranged after the first contact."
  },
  {
    title: "Online Status",
    description: "Eric’s online status will be displayed on the website. The status will indicate whether Eric is available for chat sessions or not. If Eric is offline, you can still initiate a chat, but the refund policy will only apply from the time Eric returns online."
  },
  {
    title: "Intellectual Property",
    description: "All content on SpeedScore.net, including text, graphics, logos, and software, is the property of SpeedScore.net or its content suppliers and is protected by international copyright laws. Unauthorized use of the content may violate copyright, trademark, and other laws"
  },
  {
    title: "Indemnification",
    description: "You agree to indemnify and hold harmless SpeedScore.net, its affiliates, and their respective directors, officers, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including legal fees, arising out of or in any way connected with your access to or use of the services."
  },
  {
    title: "Changes to Terms",
    description: "SpeedScore.net reserves the right to modify these terms and conditions at any time. We will notify you of any changes by posting the new terms on this page. Your continued use of the services after any changes indicates your acceptance of the new terms."
  },
  {
    title: "Governing Law",
    description: "These terms and conditions are governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law principles. You agree to submit to the exclusive jurisdiction of the courts located in [Your Country/State] to resolve any dispute arising out of these terms or the use of our services."
  },
  {
    title: "Contact Information",
    description: "If you have any questions about these terms and conditions, please contact us at:"
  },
]

const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered blockScrollOnMount={false}>
      <ModalOverlay/>
      <ModalContent maxW={'800px'} maxH={'95%'} overflowY={'auto'} >
        <ModalHeader>
          <Text
            fontSize='26px'
            textAlign={'center'}
          >
            Terms and Conditions
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {termsAndConditions.map((terms, index) => (
            <div key={index}>
              <Box my={5} textAlign={'center'}>
                <Text fontSize="18px" fontWeight="400">
                  {index + 1} {terms.title}
                </Text>
                <Text fontSize="16px" fontWeight="400">
                  {terms.description}
                </Text>
              </Box>
            </div>
          ))}

          <Box textAlign={'center'}>
            <Text fontSize="16px" fontWeight="400">
              Email: [Your Email Address]
            </Text>
            <Text fontSize="16px" fontWeight="400">
              Phone: [Your Phone Number]
            </Text>
            <Text fontSize="16px" fontWeight="400">
              Address: [Your Physical Address]
            </Text>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Box display="flex" justifyContent="end" alignItems="center" gap={3} width="100%">
            <CustomGradientButton text="Close" onClick={onClose} />
          </Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default TermsModal;
