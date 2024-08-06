"use client";
import MainLoginView from "@/components/Login/MainLoginView";
import { useDisclosure } from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import AuthModal from "./AuthModal";
import MainSignUpView from "@/components/SignUp/MainSignUpView";
import ForgotPasswordForm from "@/components/ForgotPassword/ForgotPasswordForm";
import ResetPasswordForm from "@/components/ResetPassword/ResetPasswordForm";

const AuthModalWrapper: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);
  const router = useRouter();

  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");

  useEffect(() => {
    if (modal === "login") {
      setModalContent(<MainLoginView />);
      onOpen();
    } else if (modal === "sign-up") {
      setModalContent(<MainSignUpView />);
      onOpen();
    } else if (modal === "forgot-password") {
      setModalContent(<ForgotPasswordForm />);
      onOpen();
    } else if (modal === "reset-password") {
      setModalContent(<ResetPasswordForm />);
      onOpen();
    } else {
      onClose();
    }
  }, [modal, onClose, onOpen]);

  const closeModal = () => {
    onClose();
    router.push("/");
  };

  return (
    <AuthModal isOpen={isOpen} onClose={closeModal}>
      {modalContent}
    </AuthModal>
  );
};

export default AuthModalWrapper;
