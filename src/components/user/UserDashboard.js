import React from 'react';
import { DashboardLayout } from '../../layout/DashboardLayout';
import { Box, Flex, Text } from '@chakra-ui/react';
import { PiBuildingOfficeLight } from 'react-icons/pi';

export const UserDashboard = () => {
  const Card = ({ title, total }) => {
    return (
      <Flex
        py="5"
        px="7"
        flexGrow={1}
        borderRadius={'10'}
        border="1px"
        borderColor={'gray.100'}
        w="52"
        h="32"
        flexDirection={'column'}
        color="black"
      >
        <Flex justifyContent={'space-between'} alignItems={'center'}>
          <Flex bg="red" borderRadius={'full'} p="2">
            <PiBuildingOfficeLight size="24" color="black" />
          </Flex>
          <Text
            display="flex"
            fontSize={'16'}
            color="gray.500"
            fontWeight={'500'}
            textAlign={'right'}
          >
            {title}
          </Text>
        </Flex>
        <Text
          display="flex"
          justifyContent={'end'}
          fontSize={'28'}
          fontWeight={'500'}
        >
          {total}
        </Text>
      </Flex>
    );
  };
  return (
    <Box pl="5">
      <Text
        textAlign={'left'}
        color="gray.600"
        fontSize="16"
        fontWeight="medium"
      >
        Hi Dennis, welcome back
      </Text>
      <Box mt="5">
        <Flex
          gap="7"
          color="white"
          h="auto"
          border="1px"
          borderColor={'gray.100'}
          borderRadius={'10'}
          p="4"
        >
          <Card title="Departments" total="42" />
          <Card title="Departments" total="42" />
          <Card title="Departments" total="42" />
          <Card title="Departments" total="42" />
        </Flex>
      </Box>
      {/* Add more dashboard content here */}
    </Box>
  );
};
