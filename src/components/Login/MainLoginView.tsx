'use client'
import { useForm } from "react-hook-form";
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, Text } from '@chakra-ui/react'
import Link from "next/link";
import React from 'react'
import axiosInstance from "@/lib/axiosInstance";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { login } from "@/app/store/slice/authSlice";
import toast from "react-hot-toast";
import PasswordField from "../ui/PasswordField";
import GradientBackgroundButton from "../ui/GradientBackgroundButton";
import CustomGradientButton from "../ui/CustomGradientButton";
import GradientText from "../ui/GradientText";

interface LoginForm {
  email: string;
  password: string;
}

const MainLoginView = () => {
  const router = useRouter();
  const searchParams = useSearchParams()
  const dispatch = useDispatch()
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>();

  const onSubmit = async (values: LoginForm) => {
    try {
      const response = await axiosInstance.post("/auth/login", values);
      if (response.status === 200) {
        router.push("/");
        dispatch(login(response.data));
      } else {
        toast.error("Error login to the system");
      }
    } catch (error: any) {
      toast.error(error.response.data.message);
    } finally {
      reset();
    }
  };

  const handleGoToSignUp = () => {
    const newQueryParam = 'sign-up';
    const params = new URLSearchParams(searchParams.toString());
    params.set('modal', newQueryParam);

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    router.push(newUrl, undefined);
  }

  const handleCancelLoginModal = () => {
    router.push(`${window.location.pathname}`, undefined);
  }

  return (
    <Box>
      <Box py={4} width={'100%'} margin={'auto'}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" w-full"
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <Heading as="h3" size={"lg"} sx={{ textAlign: "center" }}>
            Log in
          </Heading>
          <Text
            fontSize="14px"
            fontWeight={"400"}
            color={'white'}
            textAlign={'center'}
            marginBottom={10}
          >
            Welcome back! Log in to your SpeedScore account.
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
            showForgot={true}
            bg={'var(--secondary-bg-color)'}
            register={register("password", {
              required: "Password is required",
              minLength: { value: 8, message: "Minimum length should be 8" },
            })}
            error={errors.password}
          />
          <Box display={'flex'} justifyContent={'center'} gap={3} mt={4}>
            <GradientBackgroundButton isLoading={isSubmitting} type="submit" text="Log In" width={'150px'} />
            <Link href="/">
              <CustomGradientButton text="Cancel" width={'150px'} />
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
              New to the Application?{" "}
            </span>
            <Link href={'/?modal=sign-up'}>
              <GradientText text="Sign Up" />
            </Link>

          </Box>

        </form>
      </Box>
    </Box>
  )
}

export default MainLoginView