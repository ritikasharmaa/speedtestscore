import { Box, Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import CustomGradientButton from '../ui/CustomGradientButton'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

interface ReviewAcceptModalProps {
  isOpen: boolean
  onClose: () => void
}

const ReviewAcceptModal: React.FC<ReviewAcceptModalProps> = ({ isOpen, onClose }) => {
  const router = useRouter()
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.marginRight = '-15px'
      return () => {
        document.body.style.overflow = 'auto'
        document.body.style.marginRight = '0px'
      }
    }
  }, [isOpen])

  const handleSubmitReview = () => {
    toast.success('Review Submitted')
    router.push('/service-provider')
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
      <ModalOverlay />
      <ModalContent p={2}>
        <ModalCloseButton />
        <ModalBody>
          <Text
            fontSize="24px"
            fontWeight={"500"}
            textAlign={'center'}
            mb={5}
          >
            Your Review is Accepted
          </Text>

          <Text
            fontSize="16px"
            fontWeight={"300"}
            textAlign={'center'}
            mb={10}
          >
            Please indicate your email and phone number for contact by SpeedScore conflict arbitration team. Your identity will not be revealed to the ISP without your permission if an arbitration is requested by the service provider.
          </Text>

          <Box mb={5}>
            <Text
              fontSize="16px"
              fontWeight={"500"}
              textAlign={'left'}
            >
              Email
            </Text>
            <Input mt={1} type='email' background={'#1A202C'} placeholder='stevejobs@gmail.com' />
          </Box>

          <Box mb={5}>
            <Text
              fontSize="16px"
              fontWeight={"500"}
              textAlign={'left'}
            >
              Phone Number
            </Text>
            <Input mt={1} type='email' background={'#1A202C'} placeholder='123-456-789' />
          </Box>
        </ModalBody>
        <ModalFooter>
          <Box display="flex" justifyContent="center" alignItems="center" gap={3} width="100%">
            <Button
              bgGradient="linear(to-r, #34BDE3, #0379CC)"
              color="white"
              _hover={{ bgGradient: "linear(to-r, #0379CC, #34BDE3)" }}
              sx={{ transition: "all 3s ease-in-out", width: '170px' }}
              onClick={handleSubmitReview}
            >
              Submit
            </Button>
            <CustomGradientButton onClick={onClose} text="Cancel" width={40} />
          </Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ReviewAcceptModal