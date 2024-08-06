import { Button, ButtonProps } from '@chakra-ui/react'
import React from 'react'

interface GradientBackgroundButtonProps extends ButtonProps {
  text: string
}

const GradientBackgroundButton: React.FC<GradientBackgroundButtonProps> = ({ text, ...props }) => {
  return (
    <Button
      bgGradient="linear(to-r, #34BDE3, #0379CC)"
      color="white"
      _hover={{ bgGradient: "linear(to-r, #0379CC, #34BDE3)" }}
      sx={{ transition: "all 3s ease-in-out" }}
      {...props}
    >
      {text}
    </Button>
  )
}

export default GradientBackgroundButton