import {
  Box,
  chakra,
  Container, Flex,
  Stack,
  Text, Image,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import Logo from '../images/logo.png';

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function SmallCentered() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        spacing={4}
        justify={'center'}
        align={'center'}>
        {/* <Image boxSize='100px' src={Logo} alt='logo' className='' /> */}
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Flex flexWrap={'wrap'} maxW={'100%'}>
            <Text fontWeight={700}>© 2023 Sunhearrt Ceramik. All rights reserved.&nbsp;</Text>
            <Text fontWeight={700}>Developed by <a href="https://rippleinfosoft.com">Ripple Infosoft</a></Text>
          </Flex>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'https://twitter.com/sunhearrt'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'https://www.youtube.com/channel/UCkySK9q7m_lyMR-SgY6GchQ'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'https://www.instagram.com/sunhearrtceramikofficial/'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}