import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";

interface GradientTextProps extends BoxProps {
  text: string;
}

const GradientText: React.FC<GradientTextProps> = ({ text, ...props }) => {
  return (
    <Box
      as="span"
      bgGradient="linear(90deg, #34BDE3 0%, #0379CC 100%)"
      bgClip="text"
      fontWeight="bold"
      {...props}
    >
      {text}
    </Box>
  );
};

export default GradientText;
