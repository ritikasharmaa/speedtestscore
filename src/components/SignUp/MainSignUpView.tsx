'use client'
import axiosInstance from '@/lib/axiosInstance';
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, Text, Select, Checkbox } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import PasswordField from '../ui/PasswordField';
import Link from 'next/link';
import GradientText from '../ui/GradientText';
import TermsModal from '../Modal/TermsModal';
import GradientBackgroundButton from '../ui/GradientBackgroundButton';
import CustomGradientButton from '../ui/CustomGradientButton';
import { useRouter, useSearchParams } from 'next/navigation';

interface SignUpForm {
  email: string;
  password: string;
  confirmPassword: string;
  type: string;
}

const MainSignUpView = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isTermsOpen, setIsTermsOpen] = useState(false); // State to control Terms modal

  const handleTermsClick = () => {
    setIsTermsOpen(true);
  };

  const handleTermsClose = () => {
    setIsTermsOpen(false);
  };

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SignUpForm>();

  const onSubmit = async (values: SignUpForm) => {
    try {
      const response = await axiosInstance.post("/auth/signup", values);
      if (response.status === 201) {
        toast.success(
          "Account created Successfully!"
        );
      } else {
        toast.error("Error creating new account");
      }
    } catch (error: any) {
      console.log('error->', error)
      toast.error(error.response.data.message || 'Error creating new account');
    } finally {
      reset();
    }
  };

  const handleGoToLogIn = () => {
    const newQueryParam = 'login';
    const params = new URLSearchParams(searchParams.toString());
    params.set('modal', newQueryParam);

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    router.push(newUrl, undefined);
  }

  return (
    <>
      <div className="lg:p-8 2xl:container 2xl:mx-auto md:w-11/12 mx-auto h-screen flex md:justify-center items-center pb-12 md:pb-0">
        <Box>
          <Box py={4} width={'100%'} margin={'auto'}>
            <form
              className=" w-full"
              onSubmit={handleSubmit(onSubmit)}
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <Heading as="h3" size={"lg"} sx={{ textAlign: "center" }} mt={3}>
                Sign Up
              </Heading>
              <Text
                fontSize="16px"
                fontWeight={"400"}
                color={'white'}
                textAlign={'center'}
                my={3}
              >
                Join SpeedScore to start improving your network performance.
              </Text>
              <FormControl isInvalid={!!errors.email}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  placeholder="example@gmail.com"
                  type="email"
                  bg={'var(--secondary-bg-color)'}
                  {...register("email", {
                    required: "Email is required",
                    minLength: {
                      value: 4,
                      message: "Minimum length should be 4",
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>
              <PasswordField
                id="password"
                placeholder="Password"
                bg={'var(--secondary-bg-color)'}
                register={register("password", {
                  required: "Password is required",
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message: "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character, and be at least 8 characters long",
                  },
                })}
                error={errors.password}
              />
              <PasswordField
                id="confirmPassword"
                placeholder="Confirm Password"
                bg={'var(--secondary-bg-color)'}
                register={register("confirmPassword", {
                  required: "Password is required",
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message: "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character, and be at least 8 characters long",
                  },
                })}
                error={errors.confirmPassword}
              />
              {/* <FormControl isInvalid={!!errors.type}>
              <FormLabel htmlFor="type">Type</FormLabel>
              <Select
                id="type"
                cursor={'pointer'}
                bg={'var(--secondary-bg-color)'}
                placeholder="Select type"
                {...register("type", {
                  required: "Type is required",
                })}
              >
                <option value="general">General</option>
                <option value="isp">ISP</option>
              </Select>
              <FormErrorMessage>
                {errors.type && errors.type.message}
              </FormErrorMessage>
            </FormControl> */}

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
              <Box display={'flex'} justifyContent={'center'} gap={3} mt={4}>
                <GradientBackgroundButton isLoading={isSubmitting} type='submit' text="Sign In" width={'150px'} />
                <Link href="/">
                  <CustomGradientButton text="canel" width={'150px'} />
                </Link>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
                mt={5}
              >
                <span className=" text-gray-600 text-sm">
                  Already have an account?{" "}
                </span>
                <Link href={'/?modal=login'}>
                  <GradientText onClick={handleGoToLogIn} cursor={'pointer'} text='Log in' />
                </Link>
              </Box>
            </form>
          </Box>
        </Box>
      </div>
      <TermsModal isOpen={isTermsOpen} onClose={handleTermsClose} />
    </>
  )
}

export default MainSignUpView;
