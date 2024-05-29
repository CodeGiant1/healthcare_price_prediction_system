import {
  Box,
  Button,
  Flex,
  FormLabel,
  Image,
  Input,
  Progress,
  Select,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

export const UserPassword = ({ completeOnboarding, previousStep }) => {
  return (
    <Flex
      bg="background"
      flexDirection={'column'}
      pt="20"
      alignItems={'center'}
      h="100vh"
      position="relative"
    >
      <Flex flexDirection={'column'} alignItems={'center'} w="sm" h="sm">
        <Text position="absolute" left="16" top="10">
          Logo
        </Text>
        {/* <Stack spacing={5}>
          <Progress
            mt="5"
            w="sm"
            borderRadius={'20'}
            colorScheme="blue"
            size="xs"
            value={64}
          />
        </Stack> */}
        <Box borderRadius={'5'} mt="5  " bg="white" p="10">
          <Box py="2">
            <Text fontWeight={'medium'}>How Do I Keep Your Account Safe?</Text>
            <Text textAlign={'center'} color={'#718096'} fontSize={'xs'}>
              Please enter your password
            </Text>
          </Box>
          <Flex gap={'3'} flexDirection={'column'} w="xs">
            <Box>
              <FormLabel fontSize={'sm'}>Password</FormLabel>
              <Input
                fontSize={'sm'}
                placeholder="Enter password"
                color="text"
                type="password"
                border="1px solid #EBEBEB"
                w="full"
                h="10"
                borderRadius={'sm'}
                bg="white"
              />
            </Box>
            <Box>
              <FormLabel fontSize={'sm'}>Confirm Password</FormLabel>
              <Input
                fontSize={'sm'}
                placeholder="Confirm password"
                color="text"
                type="password"
                border="1px solid #EBEBEB"
                w="full"
                h="10"
                borderRadius={'sm'}
                bg="white"
              />
            </Box>

            <Box>
              <Flex gap="5">
                <Button
                  fontSize={'sm'}
                  display="flex"
                  flexGrow={'1'}
                  h="10"
                  borderRadius={'md'}
                  color="text"
                  bg="#E5E5E5"
                  _hover={{ color: 'black', border: '1px solid primary' }}
                  onClick={previousStep}
                  leftIcon={<IoIosArrowRoundBack size={'20'} />}
                >
                  Back
                </Button>
                <Button
                  fontSize={'sm'}
                  flexGrow={'10'}
                  display="flex"
                  h="10"
                  borderRadius={'md'}
                  color="white"
                  bg="primary"
                  _hover={{ color: 'white', bg: 'primary' }}
                  onClick={completeOnboarding}
                  rightIcon={<IoIosArrowRoundForward size={'20'} />}
                >
                  Finish
                </Button>
              </Flex>
              {/* <Flex pt="5" fontSize={'sm'} justifyContent={'center'} gap="1">
                <Text color="#0A0A0A">Already have an account? </Text>
                <Link>
                  <Text fontWeight={'medium'}>Sign In</Text>
                </Link>
              </Flex> */}
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};
