import { Box, Text } from "@chakra-ui/react";

interface StatusIndicatorProps {
  isOnline: boolean;
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ isOnline }) => {
  return (
    <Box display="flex" alignItems="center" pb={2}>
      <Box
        mr="2"
        width="16px"
        height="16px"
        borderRadius="50%"
        backgroundColor={isOnline ? "green" : "gray"}
      />
      <Text fontSize="16px" fontWeight="500">
        {isOnline ? "Online Now" : "Online Back Soon"}
      </Text>
    </Box>
  );
};

export default StatusIndicator;
