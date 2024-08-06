'use client'
import axiosInstance from '@/lib/axiosInstance'
import { Box, Button, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { FaArrowLeftLong } from 'react-icons/fa6'
import PasswordField from '../ui/PasswordField'
import GradientBackgroundButton from '../ui/GradientBackgroundButton'
import CustomGradientButton from '../ui/CustomGradientButton'

const ResetPasswordForm = () => {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [key, setKey] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const searchParams = useSearchParams()
  const router = useRouter()

  const validationPassword = (password: string) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  useEffect(() => {
    const keyParam = searchParams.get('key')
    if (keyParam) {
      setKey(keyParam)
    }
  }, [searchParams])

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
    if (e.target.value !== confirmPassword) {
      setError('Passwords do not match')
    } else {
      setError('')
    }
  }

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value)
    if (password !== e.target.value) {
      setError('Passwords do not match')
    } else {
      setError('')
    }
  }

  useEffect(() => {
    console.log('error->', error)
  }, [error])

  const handleSubmit = async () => {

    if (!validationPassword(password)) {
      setError('Password must include at least one uppercase letter, one lowercase letter, one number, and one special character, and be at least 8 characters long')
      return;
    }

    if (!error && password && confirmPassword) {
      const data = {
        password: password
      }
      try {
        setIsLoading(true)
        const response = await axiosInstance.post(`/auth/reset-password?key=${key}`, data);
        console.log(response)
        if (response.status === 200) {
          console.log('Password changed successfully.');
          router.push('/');
        } else {
          console.log('Error changing password. Status:', response.status);
        }
      } catch (error) {
        toast.error('Error changing the password');
        console.error('Error changing password:', error);
      } finally {
        setIsLoading(false)
      }

    } else {
      console.log('Passwords do not match.')
    }
  }


  return (
    <Box className='w-full h-screen flex justify-center items-center p-4'>
      <Box py={4} width={'100%'} margin={'auto'}>
        <Box className='flex flex-col rounded-md w-[350px] sm:w-[400px] md:w-96 mx-auto'>
          <Heading as="h3" size={"lg"} textAlign={'center'} mt={5}>
            New Password
          </Heading>
          <Text
            fontSize="14px"
            fontWeight={"400"}
            color={'white'}
            textAlign={'center'}
            my={5}
          >
            Please enter your new password below.
          </Text>
          <Box display={'flex'} gap={4} flexDirection={'column'}>
            <PasswordField
              id="password"
              placeholder="********"
              onChange={handlePasswordChange}
              bg={'var(--secondary-bg-color)'}

            />
            <PasswordField
              id="confirm-password"
              placeholder="********"
              onChange={handleConfirmPasswordChange}
              label='Confirm Password'
              bg={'var(--secondary-bg-color)'}
            />
          </Box>
          <Text
            fontSize="14px"
            fontWeight={"400"}
            color={'red.500'}
            textAlign={'center'}
            mt={2}
          >
            {error}
          </Text>
          <Box display={'flex'} justifyContent={'center'} gap={3} mt={4}>
            <GradientBackgroundButton
              disabled={!!error || !password || !confirmPassword}
              onClick={handleSubmit}
              isLoading={isLoading} type="submit" text="Submit Password" width={'150px'} />
            <Link href="/?modal=forgot-password">
              <CustomGradientButton text="Back to Reset" width={'150px'} />
            </Link>
          </Box>         
        </Box>
      </Box>
    </Box>
  )
}

export default ResetPasswordForm