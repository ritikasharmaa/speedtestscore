import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

const LaptopDataTable = () => {

  const tableData = [
    {
      tier: 'Tier 1',
      submission: '1-10,000',
      na: 0.5,
      euro: 0.4,
      asia: 0.2,
    },
    {
      tier: 'Tier 2',
      submission: '10,001 - 25,000',
      na: 0.75,
      euro: 0.6,
      asia: 0.3,
    },
    {
      tier: 'Tier 3',
      submission: '25,001 - 100,000',
      na: 1.5,
      euro: 1,
      asia: 0.55,
    },
    {
      tier: 'Tier 4',
      submission: '100,001+',
      na: 2,
      euro: 1.5,
      asia: 0.9,
    }
  ]

  return (
    <TableContainer mt={5}>
      <Table>
        <TableCaption textAlign={'left'}>*Amounts shown in cents</TableCaption>
        <Thead>
          <Tr>
            <Th>Tier</Th>
            <Th>Submission</Th>
            <Th>NA</Th>
            <Th>Euro/Aus</Th>
            <Th>Asia</Th>
          </Tr>
        </Thead>
        <Tbody>

          {tableData.map((data, index) => (
              <Tr key={index}>
                <Td>{data.tier}</Td>
                <Td>{data.submission}</Td>
                <Td>{data.na}</Td>
                <Td>{data.euro}</Td>
                <Td>{data.asia}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default LaptopDataTable