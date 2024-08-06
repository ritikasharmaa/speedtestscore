import { Box, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

interface NavigationItemProps {
  text: string,
  icon?: React.ReactElement,
  link?: string,
  showMore?: boolean
  onClick?: () => void
}

const NavigationItem: React.FC<NavigationItemProps> = ({ text, icon, link = '#', showMore, onClick }) => {
  return (
    <Link href={link} passHref onClick={onClick}>
      <Box display={'flex'} justifyContent={'space-between'} my={2} borderRadius={3} px={3} py={2} _hover={{ background: '#1A202C' }}>
        <Flex as="a" alignItems={'center'} gap={4}>
          {icon && <span style={{ color: 'white' }}>{icon}</span>}
          <Text
            fontSize="16px"
            color={'white'}
          >
            {text}
          </Text>
        </Flex>
        {showMore && <span style={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><IoIosArrowDown /></span>}
      </Box>
    </Link>
  )
}

export default NavigationItem
