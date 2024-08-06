'use client'
import { Box, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Textarea } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import CustomGradientButton from '../ui/CustomGradientButton';
import GradientBackgroundButton from '../ui/GradientBackgroundButton';


interface AddVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddVideoModal: React.FC<AddVideoModalProps> = ({ isOpen, onClose }) => {

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

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent maxW={'800px'} maxH={'95%'} overflowY={'auto'} p={2} >
        <ModalHeader>
          <Text
            fontSize='26px'
            textAlign={'center'}
          >
            Upload Video
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box
            bg={'var(--secondary-bg-color)'}
            borderRadius={10}
            width={'100%'}
            height={350}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
              <Text fontSize={'40px'}>+</Text>
              <Text fontSize={{base: '14px', md: '20px'}} textAlign={'center'} mt={2}>Drag & drop or click to upload a new video.</Text>
            </Box>
          </Box>

          <Box mt={5}>
            <Text fontSize={'18px'} my={2}>Thumbnail Image</Text>
            <Box
              bg={'var(--secondary-bg-color)'}
              borderRadius={10}
              width={'100%'}
              height={300}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                <Text fontSize={'40px'}>+</Text>
                <Text fontSize={{base: '14px', md: '20px'}} textAlign={'center'} mt={2}>Drag & drop or click to upload a thumbnail image</Text>
              </Box>
            </Box>
          </Box>

          <Box my={10}>
            <Box mb={5}>
              <Text
                fontSize="16px"
                fontWeight={"500"}
                textAlign={'left'}
              >
                Video Title
              </Text>
              <Input mt={'1px'} type='email' background={'#1A202C'} placeholder='stevejobs@gmail.com' />
            </Box>

            <Box>
              <Text
                fontSize="16px"
                fontWeight={"500"}
                textAlign={'left'}
              >
                Video Description
              </Text>
              <Textarea placeholder='Your video description here...' background={'var(--secondary-bg-color)'} border={'none'} rows={5} />
            </Box>
          </Box>


          <Box display={'flex'} justifyContent={'center'} gap={3}>
            
          </Box>

        </ModalBody>
        <ModalFooter>
          <Box display="flex" justifyContent="center" alignItems="center" gap={3} width="100%">
          <GradientBackgroundButton text='Add Video' />
          <CustomGradientButton text='Cancel' onClick={onClose} />
          </Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default AddVideoModal