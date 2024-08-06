"use client";

import { Flex } from "@chakra-ui/react";

interface PageComponent {
  children: React.ReactNode;
  top?: React.ReactNode;
  left?: React.ReactNode;
  right?: React.ReactNode;
  bottom?: React.ReactNode;
}

const PageComponent: React.FC<PageComponent> = ({ children }) => {
  return (
    <>
      {/* <Box p={6} width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            {top}
          </Box> */}
      <Flex mt={2}>
        {/* <Flex flexDirection={'column'} justifyContent={'start'} mt={10}>{left}</Flex> */}
        <Flex
          as="section"
          justifyContent="center"
          gap={6}
          px={5}
          my={2}
          mx={"auto"}
          width={{ base: "100%", md: "80%" }}
        >
          {children}
        </Flex>
        {/* <Flex flexDirection={'column'} justifyContent={'start'} mt={10}>{right}</Flex> */}
      </Flex>
      {/* <Flex justify={"center"} p={6}>
            {bottom}
          </Flex> */}
    </>
  );
};

export default PageComponent;
