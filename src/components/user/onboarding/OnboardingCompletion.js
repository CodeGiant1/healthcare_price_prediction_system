import { Box, Button, Center, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { IoIosArrowRoundForward, IoIosCheckmarkCircle } from 'react-icons/io';

const OnboardingCompletion = () => (
  <Flex
    bg="#E5E5E5"
    flexDirection={'column'}
    pt="20"
    alignItems={'center'}
    h="100vh"
  >
    <Box>
      <Flex
        gap="3"
        flexDirection={'column'}
        borderRadius={'16'}
        bg="white"
        p="10"
      >
        <Flex flexDirection={'column'} alignItems={'center'}>
          <IoIosCheckmarkCircle size="52" color="#10B43E" />
          <Text fontSize={'28'} fontWeight={'500'}>
            Congratulations
          </Text>
          <Text fontSize={'sm'} color="gray">
            You have successfully registered as a patient
          </Text>
        </Flex>
        <Box
          p="5"
          maxW="sm"
          borderRadius={'16'}
          bg="#F3F5FC"
          textAlign={'left'}
        >
          <Text fontSize={'xs'} fontWeight={'700'}>
            WHAT'S NEXT?
          </Text>
          <Text pt="2" fontSize={'xs'} fontWeight={'400'} color="gray">
            Thank you for registering! You can now complete your profile, and
            explore treatment pricing. Click the button below to go to your
            dashboard and start managing your healthcare journey.
          </Text>
          <Button
            mt="5"
            border="1px solid #10B43E"
            color="text"
            w="full"
            fontSize={'sm'}
            rightIcon={<IoIosArrowRoundForward size="20" />}
          >
            Dashboard
          </Button>
        </Box>
      </Flex>
    </Box>
  </Flex>
);

export default OnboardingCompletion;
