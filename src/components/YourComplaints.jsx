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

export default function SocialProfileWithImage() {
  const value = localStorage.getItem('user');
  console.log(value);
  const [userD, setUserD] = React.useState();
  const triggerFunction = async (e) => {
    try {
      const data = (await axios.post('http://localhost:5000/api/isalreadyregistered', { email: value })).data;
      setUserD(data);
    } catch (error) {
      window.alert("Error");
    }
  }
  return (
    <>
      <Button m={6} onClick={triggerFunction}>Fetch Your Data</Button>
      <Flex m={10}>
        <TableContainer>
          <Table size='sm'>
            <Thead>
              <Tr>
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
                      <Td>{user.typeIssue === 'others' ? user.others : user.typeIssue}</Td>
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