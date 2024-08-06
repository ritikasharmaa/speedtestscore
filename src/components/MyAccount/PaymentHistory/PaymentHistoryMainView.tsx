import React from "react";

import { Box, Flex, Text } from "@chakra-ui/react";
import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";
import PageComponent from "@/components/PageComponent";
import VerticalTypeAd from "@/components/VerticalTypeAd";

const PaymentHistoryMainView = () => {
  const tableData = [
    {
      date: "2024-07-01",
      amount: "$10",
    },
    {
      date: "2024-07-01",
      amount: "$10",
    },
    {
      date: "2024-07-01",
      amount: "$10",
    },
    {
      date: "2024-07-01",
      amount: "$10",
    },
    {
      date: "2024-07-01",
      amount: "$10",
    },
    {
      date: "2024-07-01",
      amount: "$10",
    },
    {
      date: "2024-07-01",
      amount: "$10",
    },
  ];

  return (
    <PageComponent
      left={<VerticalTypeAd />}
      right={<VerticalTypeAd marginDirection="right" />}
    >
      <Flex direction={"column"} width={"100%"}>
        <Link href={"/my-account"}>
          <Box display={"inline"} mb={4}>
            <Box width={"100%"} display={"flex"} alignItems={"center"} gap={2}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <FaArrowLeftLong color="#34BDE3" />
              </Box>
              <Text fontSize="14px" fontWeight={"500"} textAlign={"left"}>
                Back to Account
              </Text>
            </Box>
          </Box>
        </Link>

        <Box width={"100%"} my={4}>
          <Text fontSize="28px" fontWeight={"500"} textAlign={"center"}>
            Payment History
          </Text>
        </Box>

        <Box>
          <TableContainer mt={5}>
            <Table>
              <Thead>
                <Tr>
                  <Th>Date</Th>
                  <Th isNumeric>Amount</Th>
                </Tr>
              </Thead>
              <Tbody>
                {tableData.map((data, index) => (
                  <Tr key={index}>
                    <Td>{data.date}</Td>
                    <Td isNumeric>{data.amount}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Flex>
    </PageComponent>
  );
};

export default PaymentHistoryMainView;
