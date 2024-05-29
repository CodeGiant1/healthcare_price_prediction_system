import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Sidebar from '../components/user/navigation/Sidebar';

export const DashboardLayout = ({ children }) => {
  return (
    <Flex>
      <Sidebar children={children} />
    </Flex>
  );
};
