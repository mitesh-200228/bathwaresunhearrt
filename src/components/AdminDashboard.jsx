import {
  Flex,
  Button,
} from '@chakra-ui/react'
import axios from 'axios';
import {
  Table,
  Thead,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import React from 'react';

export default function AdminDashboard({ keypass }) {
  const value = localStorage.getItem('user');
  console.log(value);
  const [userD, setUserD] = React.useState();
  return (
    <>
      {/* <Button m={6} onClick={triggerFunction}>Fetch Your Data</Button> */}
      <Flex m={10}>
        <TableContainer>
          <Table size='sm'>
            <Thead>
              <Tr>
                <Th>First Name</Th>
                <Th>Last Name</Th>
                <Th>Email</Th>
                <Th>Phone Number</Th>
                <Th>Number of Complaint</Th>
                <Th>Complaint Type</Th>
                <Th>Comments</Th>
                <Th>Other Comments</Th>
                <Th>Address</Th>
                <Th>City</Th>
                <Th>Pincode</Th>
              </Tr>
            </Thead>
            {userD ? userD.length > 0 ? <>
              {userD.map((user) => {
                return (
                  <>
                    <Tr>
                      <Td>{user.firstname}</Td>
                      <Td>{user.lastname}</Td>
                      <Td>{user.email}</Td>
                      <Td>{user.number}</Td>
                      <Td>{user.numberOfComplain}</Td>
                      <Td>{user.typeIssue}</Td>
                      <Td>{user.comments}</Td>
                      <Td>{user.others}</Td>
                      <Td>{user.address}</Td>
                      <Td>{user.city}</Td>
                      <Td>{user.pincode}</Td>
                    </Tr>
                  </>
                )
              })}
            </> : <>No Data Found</> : <></>}
          </Table>
        </TableContainer>
      </Flex>
    </>
  )
}