import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import {
  FcAssistant,
  FcCollaboration,
  FcDonate,
} from 'react-icons/fc'

const WEBSITE_URL = process.env.WEBSITE_URL;
console.log(WEBSITE_URL);
const Card = ({ heading, description, icon, href,btnText }) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}>
      <Stack align={'start'} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('gray.100', 'gray.700')}>
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
        <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
          <a href={href}>{btnText}</a>
        </Button>
      </Stack>
    </Box>
  )
}

export default function gridListWith() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          Welcome to <br/>SUNHEARRT Customer Care
        </Heading>
        <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
          We launched our new portal for customers best exprience after purchase, for more information see below details.
        </Text>
      </Stack>

      <Container maxW={'5xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={'Query'}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={'Contact Us at Our Main Ahmedabad Office: +91-79-61554444'}
            href={'#'}
            btnText={'Call us'}
          />
          <Card
            heading={'Contact Us'}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={'You can visit our website or contact us at: '}
            href={'https://www.sunhearrt.com/contact.php'}
            btnText={'Our Website'}
          />
          <Card
            heading={'Complaint'}
            icon={<Icon as={FcDonate} w={10} h={10} />}
            description={'You can notify your complaint by clicking below button.'}
            href={'/complaint'}
            btnText={'Complaint Now'}
          />
        </Flex>
      </Container>
    </Box>
  )
}