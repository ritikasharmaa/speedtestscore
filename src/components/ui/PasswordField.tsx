import { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  FormErrorMessage,
  Text,
  Box,
  InputProps,
} from "@chakra-ui/react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import Link from "next/link";
import GradientText from "./GradientText";

interface PasswordFieldProps extends InputProps {
  id: string;
  label?: string;
  placeholder?: string;
  register?: UseFormRegisterReturn;
  error?: FieldError | undefined;
  showForgot?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordField: React.FC<PasswordFieldProps> = ({
  id,
  placeholder,
  register,
  error,
  onChange,
  showForgot = false,
  label = 'Password',
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <FormControl isInvalid={!!error}>
      <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
        <FormLabel htmlFor={id}>{label}</FormLabel>
      </Box>
      <InputGroup>
        <Input
          onChange={onChange}
          id={id}
          {...props}
          placeholder={placeholder || "Password"}
          type={showPassword ? "text" : "password"}
          {...register}
        />
        <InputRightElement width="4.5rem">
          <Button
            variant={"unstyled"}
            onClick={handleTogglePasswordVisibility}
            display="flex"
            justifyContent="end"
          >
            {showPassword ? (
              <EyeIcon width={20} height={20} />
            ) : (
              <EyeOffIcon width={20} height={20} />
            )}
          </Button>
        </InputRightElement>
      </InputGroup>
      <Box display={'flex'} justifyContent={'end'} mt={2}>
        {showForgot && <Link href="/?modal=forgot-password">
          <GradientText text="Forgot Password ?" fontSize={'14px'} />
        </Link>}
      </Box>
      <FormErrorMessage>{error && error.message}</FormErrorMessage>
    </FormControl>
  );
};

export default PasswordField;
