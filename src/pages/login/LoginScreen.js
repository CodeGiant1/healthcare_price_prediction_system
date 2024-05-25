import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import {
  Box,
  Button,
  Center,
  Flex,
  FormLabel,
  Image,
  Input,
  Progress,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
export const LoginScreen = () => {
  return (
    <Flex
      bg="background"
      flexDirection={'column'}
      pt="20"
      alignItems={'center'}
      h="100vh"
    >
      <Flex flexDirection={'column'} alignItems={'center'} w="sm" h="sm">
        {/* <Image src={PaypromptLogo} /> */}
        <Text>Logo</Text>
        <Box borderRadius={'5'} mt="5  " bg="white" p="10">
          <Box py="2" textAlign={'center'}>
            <Text fontSize={'20'} color="#0A0A0A" fontWeight={'bold'}>
              Sign In
            </Text>
          </Box>
          <Flex gap={'3'} flexDirection={'column'} w="xs">
            <Flex flexDirection={'column'} pt="5" gap="3">
              <Box>
                <FormLabel fontSize={'sm'}>Email</FormLabel>
                <Input
                  fontSize={'sm'}
                  placeholder="e.g abcd@mail.com"
                  type="email"
                  w="full"
                  h="10"
                  border="none"
                  bg="background"
                  px="3"
                  borderRadius={'sm'}
                />
              </Box>
              <Box>
                <FormLabel fontSize={'sm'}>Password</FormLabel>
                <Input
                  fontSize={'sm'}
                  placeholder="Password"
                  type="password"
                  w="full"
                  h="10"
                  border="none"
                  bg="background"
                  px="3"
                  borderRadius={'sm'}
                />
                <Text
                  color="#0E82F0"
                  fontWeight={'medium'}
                  textAlign={'right'}
                  pt="1"
                  fontSize={'sm'}
                >
                  Forgot Password?
                </Text>
              </Box>
            </Flex>

            <Box>
              <Flex flexDirection={'column'} gap="3">
                <Link to={'home/dashboard'}>
                  <Button
                    w="full"
                    h="10"
                    borderRadius={'sm'}
                    color="white"
                    fontSize={'sm'}
                    _hover={{ color: 'white', bg: '#3182ce' }}
                    bg={'primary'}
                  >
                    Sign In
                  </Button>
                </Link>
                <Link to={'../business-industry'}>
                  <Button
                    w="full"
                    bg="white"
                    h="10"
                    border="1px solid #e2e8f0"
                    borderRadius={'sm'}
                    color="black"
                    fontSize={'xs'}
                  >
                    <Flex gap="1" alignItems={'center'}>
                      <FcGoogle size="20" />
                      <Text>Sign In with Google</Text>
                    </Flex>
                  </Button>
                </Link>
              </Flex>

              <Flex pt="5" justifyContent={'center'} gap="1">
                <Link to={'/onboarding'}>
                  <Flex fontSize={'xs'} gap="1" color="#0A0A0A">
                    <Text color={'#0A0A0A'} fontWeight={'medium'}>
                      Don’t have an account?
                    </Text>
                    <Text>Sign Up</Text>
                  </Flex>
                </Link>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};
