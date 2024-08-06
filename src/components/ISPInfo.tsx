import { fonts } from "@/app/_theme/fonts";
import { Container, Box, Text, Flex } from "@chakra-ui/react";

const InfoSection = ({
  label,
  value,
  labelColor = "#34BDE3",
  valueColor = "white",
}: {
  label: string;
  value: string;
  labelColor?: string;
  valueColor?: string;
}) => (
  <Box mb="4">
    <Text
      color={labelColor}
      mb="2"
      fontSize="16px"
      fontWeight={"400"}
      fontFamily={fonts.rubik.style.fontFamily}
    >
      {label}
    </Text>
    <Text
      fontSize="16px"
      fontWeight={"500"}
      fontFamily={fonts.rubik.style.fontFamily}
      color={valueColor}
    >
      {value}
    </Text>
  </Box>
);

const ISPInfo = () => {
  return (
    // <Flex justifyContent={"flex-start"}>
    <Box
      w="100%"
      height="545px"
      p="20px"
      borderRadius={8}
      color="white"
      backgroundColor="#1a202c"
      flex={1}
    >
      <InfoSection label="ISP" value="Moldtelecom" />
      <InfoSection label="Connection Type:" value="unknown" />
      <InfoSection label="IPv4:" value="109.185.90.117" />
      <InfoSection label="IPv6:" value="-" />
      <InfoSection label="IPv6 not available" value="" labelColor="red.500" />
      <InfoSection label="ASN:" value="AS8926" />
      <InfoSection label="System:" value="Chrome 126.0\nWin 10" />
    </Box>
    // </Flex>
  );
};

export default ISPInfo;
