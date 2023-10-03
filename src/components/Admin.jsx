import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
} from '@chakra-ui/react'
import React from 'react';
import {
    Table, Text,
    Thead,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ExportToExcel } from './ExportToExcel'
import './complaint.css';

export default function Admin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const funcLogin = async (e) => {
        setEmail(e.target.value);
    }
    const funcPass = async (e) => {
        setPassword(e.target.value);
    }
    const [data, setData] = useState();
    const [isAuthenticatedSuccessfully, setIsAuthenticatedSuccessfully] = useState(false);
    const [finalData, setFinalData] = React.useState([]);
    const funcLoginFinal = async (e) => {
        try {
            const answer = await axios.post("https://sunhearrtbackend.onrender.com/api/adminacess", { email, password });
            if (answer.status === 200) {
                setIsAuthenticatedSuccessfully(true);
                setData(answer.data);
                const customHeadings = answer.data.map((dt) => ({
                    "First Name": dt.firstname,
                    "Last Name": dt.lastname,
                    "Email": dt.email,
                    "Phone Number": dt.number,
                    "Complaint Type": dt.typeIssue,
                    "Comments": dt.comments,
                    "Other Comments": dt.others,
                    "Address": dt.address,
                    "City": dt.city,
                    "Pincode": dt.pincode
                }));
                setFinalData(customHeadings);
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            {isAuthenticatedSuccessfully ? <>
                {/* <Button m={6} onClick={triggerFunction}>Fetch Your Data</Button> */}
                <Flex m={10} flexDir={'column'}>
                    <Text>Click This Button to get Excel Sheet</Text>
                    <Box m={10}>
                        <ExportToExcel apiData={finalData} fileName={'SUNHEARRT_CUSTOMER_DATA'} />
                    </Box>
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
                            {data ? data.length > 0 ? <>
                                {data.map((user) => {
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
            </> : <>
                <Flex
                    minH={'100vh'}
                    align={'center'}
                    justify={'center'}
                    backgroundColor={'#f0f0f0'}>
                    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                        <Stack align={'center'}>
                            <Heading fontSize={'4xl'}>Admin Login</Heading>
                        </Stack>
                        <Box
                            rounded={'lg'}
                            boxShadow={'lg'}
                            p={8}
                            backgroundColor={'#fff'}
                        >
                            <Stack spacing={4}>
                                <FormControl id="email">
                                    <FormLabel>Email address</FormLabel>
                                    <Input type="email" value={email} onChange={funcLogin} />
                                </FormControl>
                                <FormControl id="password">
                                    <FormLabel>Password</FormLabel>
                                    <Input type="password" value={password} onChange={funcPass} />
                                </FormControl>
                                <Stack spacing={10}>
                                    <Stack
                                        direction={{ base: 'column', sm: 'row' }}
                                        align={'start'}
                                        justify={'space-between'}>
                                    </Stack>
                                    <Button
                                        bg={'blue.400'}
                                        color={'white'}
                                        _hover={{
                                            bg: 'blue.500',
                                        }}
                                        onClick={funcLoginFinal}
                                    >
                                        Sign in
                                    </Button>
                                </Stack>
                            </Stack>
                        </Box>
                    </Stack>
                </Flex>
            </>}
        </>
    )
}