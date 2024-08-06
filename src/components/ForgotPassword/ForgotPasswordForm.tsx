'use client'
import React, { useEffect, useState } from 'react';
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { toast } from 'react-hot-toast';
import axiosInstance from '@/lib/axiosInstance';
import { useRouter } from 'next/navigation';
import { FaArrowLeftLong } from "react-icons/fa6";
import GradientBackgroundButton from '../ui/GradientBackgroundButton';
import CustomGradientButton from '../ui/CustomGradientButton';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    console.log('value->', value)
    setIsValidEmail(validateEmail(value));
  };

  const handleSubmit = async () => {
    console.log(!isValidEmail || email === '')
    if (!isValidEmail || email === '') {
      toast.error('Please enter a valid email address');
      return;
    }

    const formData = {
      email,
    };

    try {
      setIsLoading(true);
      const response = await axiosInstance.post('/auth/forgot-password', formData);
      if (response.status === 200) {
        toast.success('Reset instructions sent to your email');
      } else {
        toast.error('Error sending reset instructions');
      }
    } catch (error) {
      toast.error('Error sending reset instructions');
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box className='w-full h-screen flex justify-center items-center p-4'>
      <Box py={4} width={'100%'} margin={'auto'}>
        <Box className='flex flex-col rounded-md'>
          <Heading as="h3" size={"lg"} textAlign={'center'} my={5}>
            Password Recovery
          </Heading>
          <Text
            fontSize="17px"
            fontWeight={"400"}
            textAlign={'center'}
            marginBottom={10}
            mt={5}
          >
            Enter your email address to receive a link to reset your password.
          </Text>
          <FormControl isInvalid={!isValidEmail} mt={5}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              placeholder="example@gmail.com"
              type="email"
              bg={'var(--secondary-bg-color)'}
              value={email}
              onChange={handleEmailChange}
            />
            {!isValidEmail && (
              <FormErrorMessage>
                Please enter a valid email address
              </FormErrorMessage>
            )}
          </FormControl>

          <Box display={'flex'} justifyContent={'center'} gap={3} my={10}>
            <GradientBackgroundButton
              disabled={email === '' || !isValidEmail}
              onClick={handleSubmit}
              isLoading={isLoading}
              type="submit" text="Send Resent Link" width={'200px'} />
            <Link href="/?modal=login">
              <CustomGradientButton text="Back to Log In" width={'200px'} />
            </Link>
          </Box>

        </Box>
      </Box>
    </Box>
  );
}

export default ForgotPasswordForm;

