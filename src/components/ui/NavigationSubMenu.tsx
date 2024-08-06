import { Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

interface NavigationSubMenuProps {
  link: string,
  text: string,
}

const NavigationSubMenu: React.FC<NavigationSubMenuProps> = ({ link, text }) => {
  return (
    <Link href={link} passHref>
      <Text
        fontSize="16px"
        color={'white'}
        px={3}
        py={1}
        _hover={{ background: '#1A202C' }}
      >
        {text}
      </Text>
    </Link>
  )
}

export default NavigationSubMenu