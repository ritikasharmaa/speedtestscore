import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

const ServerDetails = () => {
  return (
    <Flex width={'100%'} gap={{base: 2, md:3, lg: 5}} bg={'#242C3C'} borderRadius={8} p={5}>
      <Box>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 3H4C3.46957 3 2.96086 3.21071 2.58579 3.58579C2.21071 3.96086 2 4.46957 2 5V9C2 9.53043 2.21071 10.0391 2.58579 10.4142C2.96086 10.7893 3.46957 11 4 11H20C20.5304 11 21.0391 10.7893 21.4142 10.4142C21.7893 10.0391 22 9.53043 22 9V5C22 4.46957 21.7893 3.96086 21.4142 3.58579C21.0391 3.21071 20.5304 3 20 3ZM4 9V5H20V9H4ZM20 13H4C3.46957 13 2.96086 13.2107 2.58579 13.5858C2.21071 13.9609 2 14.4696 2 15V19C2 19.5304 2.21071 20.0391 2.58579 20.4142C2.96086 20.7893 3.46957 21 4 21H20C20.5304 21 21.0391 20.7893 21.4142 20.4142C21.7893 20.0391 22 19.5304 22 19V15C22 14.4696 21.7893 13.9609 21.4142 13.5858C21.0391 13.2107 20.5304 13 20 13ZM4 19V15H20V19H4Z" fill="white" />
          <path d="M17 6H19V8H17V6ZM14 6H16V8H14V6ZM17 16H19V18H17V16ZM14 16H16V18H14V16Z" fill="white" />
        </svg>
      </Box>

      <Box flex={1}>
        <Flex justifyContent={'space-between'} flexDirection={'column'} height={'100%'}>
          <Text
            fontSize={{ base: '14px', lg: '16px', xl: '20px' }}
            fontWeight="500"
            color="white"
          >
            [MD] Chisinau - 10 Bg/s - MoldTelecom
          </Text>

          <Text
            fontSize={{ base: '14px', lg: '16px', xl: '18px' }}
            color={'white'}
            mt={4}
          >
            Chisinau, MD47.00420°N / 28.85740°E
          </Text>
        </Flex>
      </Box>

      <Flex flexDirection={'column'} justifyContent={'space-between'}>
        <Flex justifyContent={'flex-end'}>
          <Box width={35}>
            <Image src={'/images/moldova.svg'} width={100} height={100} alt='Server Location' />
          </Box>
        </Flex>
        <Text
          bgGradient="linear(to-r, #34BDE3, #0379CC)"
          bgClip="text"
          fontSize={{ base: '14px', lg: '16px', xl: '20px' }}
          fontWeight={"500"}
          mt={4}
          cursor={'pointer'}
          textAlign={'right'}
        >
          Change Server
        </Text>
      </Flex>
    </Flex>
  )
}

export default ServerDetails