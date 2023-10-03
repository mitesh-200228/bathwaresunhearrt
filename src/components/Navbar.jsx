import {
  Box,
  Flex,
  HStack,
  Button,
  useColorModeValue,
  Image
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import Logo from '../images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';

export default function WithAction() {
  const navigate = useNavigate();
  const funcRedirect = async() => {
    navigate('/complaint');
  };
  return (
    <div className='main'>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Image boxSize='100px' src={Logo} alt='logo' className=''/>
            </Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              <Link to="/">Home</Link>
              <Link to="/complaint">Complaint</Link>
              
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              // onClick={}
              leftIcon={<AddIcon />}
              onClick={(e) => funcRedirect()}
              >
              Complaint
            </Button>
            {/* <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              onClick={(e) => funclogin()}
              >
              Login
            </Button> */}
          </Flex>
        </Flex>
      </Box>
    </div>
  )
}