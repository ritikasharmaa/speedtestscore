import { Button, ButtonProps, Spinner } from "@chakra-ui/react";
import React from "react";

interface CustomButtonProps extends ButtonProps {
  text: string;
  icon?: React.ReactElement;
  disabled?: boolean;
  variant?: "primary" | "outline";
  active?: boolean;
  isLoading?: boolean;
}

const CustomGradientButton: React.FC<CustomButtonProps> = ({
  text,
  icon,
  active = false,
  isLoading = false,
  ...props
}) => {
  return (
    <Button
      bg={active ? "linear(to-r, #34BDE3, #0379CC)" : "transparent"}
      color={active ? "white" : "transparent"}
      size="md"
      variant={"outline"}
      _hover={{
        bgGradient: "linear(to-r, #0379CC, #34BDE3)",
        color: "white",
        bgClip: active ? undefined : "text",
        WebkitBackgroundClip: active ? undefined : "text",
        WebkitTextFillColor: active ? undefined : "transparent",
      }}
      sx={{
        border: active ? "none" : "2px solid #34BDE3",
        borderImageSlice: active ? undefined : 1,
        borderWidth: active ? undefined : "2px",
        borderRadius: "md",
        transition: "all 0.3s ease-in-out",
        bgGradient: "linear(to-r, #34BDE3, #0379CC)",
        bgClip: active ? undefined : "text",
        WebkitBackgroundClip: active ? undefined : "text",
        WebkitTextFillColor: active ? undefined : "transparent",
      }}
      {...props}
    >
      {/* {icon && (
        <span
          style={{ marginRight: "8px", color: active ? "white" : "#34BDE3" }}
        >
          {icon}
        </span>
      )}
      {text} */}

      {isLoading ? (
        <Spinner
          color="#34BDE3"
          thickness="2px"
          speed="0.65s"
          emptyColor="gray.200"
        />
      ) : (
        <>
          {icon && (
            <span
              style={{
                marginRight: "8px",
                color: active ? "white" : "#34BDE3",
              }}
            >
              {icon}
            </span>
          )}
          {text}
        </>
      )}
    </Button>
  );
};

export default CustomGradientButton;
