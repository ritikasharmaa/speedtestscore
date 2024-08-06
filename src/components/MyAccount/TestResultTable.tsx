import React from 'react'
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { FaNetworkWired, FaWifi } from 'react-icons/fa'
const TestResultTable = () => {

  const tableData = [
    {
      date: '2024-07-01',
      connection: <FaWifi />,
      isp: 'Moldtelecom',
      downSpeed: '100 Mbps',
      upSpeed: '20 Mbps',
      latency: '1 ms'
    },
    {
      date: '2024-07-01',
      connection: <FaNetworkWired />,
      isp: 'Moldtelecom',
      downSpeed: '100 Mbps',
      upSpeed: '20 Mbps',
      latency: '1 ms'
    },
    {
      date: '2024-07-01',
      connection: <FaNetworkWired />,
      isp: 'Moldtelecom',
      downSpeed: '100 Mbps',
      upSpeed: '20 Mbps',
      latency: '1 ms'
    },
    {
      date: '2024-07-01',
      connection: <FaWifi />,
      isp: 'Moldtelecom',
      downSpeed: '100 Mbps',
      upSpeed: '20 Mbps',
      latency: '1 ms'
    },
    {
      date: '2024-07-01',
      connection: <FaWifi />,
      isp: 'Moldtelecom',
      downSpeed: '100 Mbps',
      upSpeed: '20 Mbps',
      latency: '1 ms'
    },
  ]

  return (
    <TableContainer mt={5}>
      <Table>
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>Wifi/Eth</Th>
            <Th>ISP</Th>
            <Th>Down Speed</Th>
            <Th>Up Speed</Th>
            <Th>Latency</Th>
          </Tr>
        </Thead>
        <Tbody>

          {tableData.map((data, index) => (
            <Tr key={index}>
              <Td>{data.date}</Td>
              <Td>{data.connection}</Td>
              <Td>{data.isp}</Td>
              <Td>{data.downSpeed}</Td>
              <Td>{data.upSpeed}</Td>
              <Td>{data.latency}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default TestResultTable