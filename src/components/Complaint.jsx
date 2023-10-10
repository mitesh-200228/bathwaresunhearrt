import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import './complaint.css';
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Text,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputGroup,
  FormHelperText,
} from '@chakra-ui/react'

import { useToast } from '@chakra-ui/react'

export default function Multistep() {
  const toast = useToast()
  const [step, setStep] = useState(1)
  const [progress, setProgress] = useState(33.33)
  const [problemType, setProblemType] = React.useState("")
  const [firstname, setFirstName] = React.useState("");
  const [lastname, setlastname] = React.useState("");
  const [email, setemail] = React.useState("");
  const [numbers, setnumbers] = React.useState(0);
  const [comments, setcomments] = React.useState("");
  const [bill, setbill] = React.useState("");
  const [country, setcountry] = React.useState("");
  const [address, setAddress] = useState("");
  const [others, setOthers] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [pincode, setpincod] = useState(0);
  const funcProblemType = (e) => {
    setProblemType(e.target.value);
  }
  const funcFirstName = (e) => {
    setFirstName(e.target.value);
  }
  const funcLastName = (e) => {
    setlastname(e.target.value);
  }
  const funcEmail = (e) => {
    setemail(e.target.value);
  }
  const funcNumbers = (e) => {
    setnumbers(e.target.value);
  }
  const funcComments = (e) => {
    setcomments(e.target.value);
  }
  const funcBill = (e) => {
    setbill(e.target.value);
  }
  const funcCountry = (e) => {
    setcountry(e.target.value);
  }
  const funcAddress = (e) => {
    setAddress(e.target.value);
  }
  const funcCity = (e) => {
    setcity(e.target.value);
  }
  const funcState = (e) => {
    setstate(e.target.value);
  }
  const funcOthers = (e) => {
    setOthers(e.target.value);
  }
  const funcPincode = (e) => {
    setpincod(e.target.value);
  }

  const [latitude, setLatitude] = React.useState(null);
  const [longitude, setLongitude] = React.useState(null);
  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          localStorage.setItem("latitude", latitude);
          localStorage.setItem("longitude", longitude);
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  });

  const submitFunc = async (e) => {
    try {
      let allData = [];
      allData.push(firstname);
      allData.push(lastname);
      allData.push(email);
      allData.push(numbers);
      allData.push(problemType);
      allData.push(comments);
      allData.push(others);
      allData.push(bill);
      allData.push(country);
      allData.push(address);
      allData.push(city);
      allData.push(state);
      allData.push(pincode);
      allData.push(latitude);
      allData.push(longitude);
      await axios.post("https://sunhearrtbackend.onrender.com/api/sendcomplaint", {
        allData
      }).then((data) => {
        console.log(data.status);
        if (data.status === 400) {
          window.alert("Send all information!");
        }
      }).catch(error => {
        window.alert("Some Error Occured!");
      })
    } catch (error) {
      window.alert("Some Error Occured!");
    }
  }
  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form">
        <Progress hasStripe value={progress} mb="5%" mx="5%" isAnimated></Progress>
        {step === 1 ? <>
          <Text w="100%" textAlign={'center'} mb="2%" className='main' fontSize={'3xl'}>
            User Registration
          </Text>
          <Flex>
            <FormControl mr="5%">
              <FormLabel htmlFor="first-name" fontWeight={'normal'}>
                First name
              </FormLabel>
              <Input id="first-name" placeholder="First name" onChange={(e) => funcFirstName(e)} />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="last-name" fontWeight={'normal'}>
                Last name
              </FormLabel>
              <Input id="last-name" placeholder="Last name" onChange={(e) => funcLastName(e)} />
            </FormControl>
          </Flex>
          <FormControl mt="2%">
            <FormLabel htmlFor="email" fontWeight={'normal'}>
              Email address
            </FormLabel>
            <Input id="email" type="email" onChange={(e) => funcEmail(e)} />
            <FormHelperText>We&apos;ll never share your email.</FormHelperText>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="number" fontWeight={'normal'} mt="2%">
              Phone Number
            </FormLabel>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                max={10}
                type={'number'}
                placeholder="Enter Your Phone Number as +91 12345 67890"
                onChange={(e) => funcNumbers(e)}
              />
            </InputGroup>
          </FormControl>
        </> : step === 2 ? <>
          <Text w="100%" textAlign={'center'} className='main' fontSize={'3xl'}>
            Your Problem
          </Text>
          <SimpleGrid columns={1} spacing={6}>
            <FormControl as={GridItem} colSpan={[1, 2]}>
              <FormLabel
                fontSize="sm"
                fontWeight="md"
                color="gray.700"
                _dark={{
                  color: 'gray.50',
                }}>
                Your Issue Type
              </FormLabel>
              <Select
                id="problemtype"
                name="problemtype"
                autoComplete="problemtype"
                placeholder="Select option"
                focusBorderColor="brand.400"
                shadow="sm"
                size="sm"
                w="full"
                value={problemType}
                onChange={funcProblemType}
                rounded="md"
              >
                <option value={'leakage'}>Leakage</option>
                <option value={'material default'}>Material Default</option>
                <option value={'others'}>Others</option>
              </Select>
              {problemType === 'others' ? <>
                <FormControl id="email" mt={1}>
                  <FormLabel
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                      color: 'gray.50',
                    }}>
                    Specify the details
                  </FormLabel>
                  <Input
                    placeholder="Your Issue Type"
                    rows={3}
                    shadow="sm"
                    focusBorderColor="brand.400"
                    fontSize={{
                      sm: 'sm',
                    }}
                    onChange={(e) => funcOthers(e)}
                  />
                </FormControl>
              </> : <>

              </>}
            </FormControl>

            <FormControl id="email" mt={1}>
              <FormLabel
                fontSize="sm"
                fontWeight="md"
                color="gray.700"
                _dark={{
                  color: 'gray.50',
                }}>
                Comments?
              </FormLabel>
              <Input
                placeholder="Your Comments..."
                rows={3}
                shadow="sm"
                focusBorderColor="brand.400"
                fontSize={{
                  sm: 'sm',
                }}
                onChange={(e) => funcComments(e)}
              />
            </FormControl>

            <FormControl id="email" mt={1}>
              <FormLabel
                fontSize="sm"
                fontWeight="md"
                color="gray.700"
                _dark={{
                  color: 'gray.50',
                }}
              >
                Bill Number
              </FormLabel>
              <Input
                placeholder="Bill Number..."
                rows={3}
                shadow="sm"
                focusBorderColor="brand.400"
                fontSize={{
                  sm: 'sm',
                }}
                onChange={(e) => funcBill(e)}
              />
            </FormControl>
          </SimpleGrid>
        </> : <>
          <Text w="100%" textAlign={'center'} mb="2%" className='main' fontSize={'3xl'}>
            Address Details
          </Text>
          <FormControl as={GridItem} colSpan={[6, 3]}>
            <FormLabel
              htmlFor="country"
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{
                color: 'gray.50',
              }}
            >
              Country / Region
            </FormLabel>
            <Select
              id="country"
              name="country"
              autoComplete="country"
              placeholder="Select option"
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
              value={country}
              onChange={funcCountry}
            >
              <option value={'India'}>India</option>
            </Select>
          </FormControl>

          <FormControl as={GridItem} colSpan={6}>
            <FormLabel
              htmlFor="street_address"
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{
                color: 'gray.50',
              }}
              mt="2%">
              Street address
            </FormLabel>
            <Input
              type="text"
              name="street_address"
              id="street_address"
              autoComplete="street-address"
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              onChange={(e) => funcAddress(e)}
              rounded="md"
            />
          </FormControl>

          <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
            <FormLabel
              htmlFor="city"
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{
                color: 'gray.50',
              }}
              mt="2%">
              City
            </FormLabel>
            <Input
              type="text"
              name="city"
              id="city"
              autoComplete="city"
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              onChange={(e) => funcCity(e)}
              w="full"
              rounded="md"
            />
          </FormControl>

          <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
            <FormLabel
              htmlFor="state"
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{
                color: 'gray.50',
              }}
              mt="2%">
              State / Province
            </FormLabel>
            <Input
              type="text"
              name="state"
              id="state"
              autoComplete="state"
              focusBorderColor="brand.400"
              shadow="sm"
              onChange={(e) => funcState(e)}
              size="sm"
              w="full"
              rounded="md"
            />
          </FormControl>

          <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
            <FormLabel
              htmlFor="postal_code"
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{
                color: 'gray.50',
              }}
              mt="2%"
            >
              ZIP / Postal
            </FormLabel>
            <Input
              type="text"
              name="postal_code"
              id="postal_code"
              autoComplete="postal-code"
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              onChange={(e) => funcPincode(e)}
              rounded="md"
            />
          </FormControl>
        </>}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-evenly" flexDirection={'column'}>
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1)
                  setProgress(progress - 33.33)
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%">
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1)
                  if (step === 3) {
                    setProgress(100)
                  } else {
                    setProgress(progress + 33.33)
                  }
                }}
                colorScheme="teal"
                variant="outline">
                Next
              </Button>
            </Flex>
            <Flex>
              {step === 3 ? (
                <Button
                  w="7rem"
                  colorScheme="red"
                  marginTop={2}
                  variant="solid"
                  onClick={async () => {
                    submitFunc();
                    toast({
                      title: 'Complaint Registered Successfully.',
                      description: "We've created your complaint and we will get back to you.",
                      status: 'success',
                      duration: 3000,
                      isClosable: true,
                    })
                  }}>
                  Submit
                </Button>
              ) : null}
            </Flex>
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  )
}