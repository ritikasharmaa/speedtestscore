import { Box, Text } from '@chakra-ui/react'
import Image from 'next/image';
import React from 'react'

interface CustomCompanyComponentProps {
  title: string
  logo: string
  size: 50 | 70 | 150
}

const CustomCompanyComponent: React.FC<CustomCompanyComponentProps> = ({ title, logo, size }) => {
  return (
    <Box background="#242C3C" borderRadius={6} p={10} display={'flex'} justifyContent={'space-between'} flexDirection={'column'}>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} mb={4}>
        <Image src={logo} alt='Company Logo' width={size} height={100} />
      </Box>
      <Text
        fontSize={{ base: '20px', md: '22px' }}
        fontWeight={"500"}
        textAlign={'center'}
      >
        {title}
      </Text>
    </Box>
  )
}

export default CustomCompanyComponent