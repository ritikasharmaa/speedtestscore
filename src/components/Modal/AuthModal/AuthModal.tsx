'use client'
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import { useRouter } from 'next/navigation';
import React, { ReactNode } from 'react'

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, children}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW={'700px'}>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default AuthModal