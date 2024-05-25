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
import { Link } from 'react-router-dom';

export const UserFullName = ({ nextStep }) => {
  return (
    <Flex
      bg="#E5E5E5"
      flexDirection={'column'}
      pt="10"
      alignItems={'center'}
      h="100vh"
    >
      <Flex flexDirection={'column'} alignItems={'center'} w="sm" h="sm">
        <Text>Logo</Text>
        <Stack spacing={5}>
          <Progress
            my="5"
            w="sm"
            borderRadius={'20'}
            colorScheme="blue"
            size="sm"
            value={32}
          />
        </Stack>
        <Box borderRadius={'5'} mt="5  " bg="white" p="10">
          <Box py="2">
            <Text fontWeight={'medium'}>What should I call you ?</Text>
            <Text textAlign={'center'} color={'#718096'} fontSize={'xs'}>
              Please enter your name below
            </Text>
          </Box>
          <Flex gap={'3'} flexDirection={'column'} w="xs">
            <Box>
              <FormLabel fontSize={'sm'}>First name</FormLabel>
              <Input
                fontSize={'sm'}
                placeholder="Select business industry"
                color="#A4A4A4"
                border="1px solid #EBEBEB"
                w="full"
                h="10"
                borderRadius={'sm'}
                bg="white"
              />
            </Box>
            <Box>
              <FormLabel fontSize={'sm'}>Last name</FormLabel>
              <Input
                fontSize={'sm'}
                placeholder="Select business industry"
                color="#A4A4A4"
                border="1px solid #EBEBEB"
                w="full"
                h="10"
                borderRadius={'sm'}
                bg="white"
              />
            </Box>
            <Box>
              <Button
                fontSize={'sm'}
                w="full"
                h="10"
                borderRadius={'sm'}
                color="white"
                bg="#3182ce"
                _hover={{ color: 'white', bg: '#3182ce' }}
                onClick={nextStep}
              >
                Next
              </Button>

              <Flex pt="5" fontSize={'sm'} justifyContent={'center'} gap="1">
                <Text color="#0A0A0A">Already have an account? </Text>
                <Link>
                  <Text fontWeight={'medium'}>Sign In</Text>
                </Link>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};
