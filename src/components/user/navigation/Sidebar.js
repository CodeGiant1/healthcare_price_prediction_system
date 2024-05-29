import React, { ReactNode, useState, useEffect } from 'react';
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Image,
  useStyleConfig,
  color,
} from '@chakra-ui/react';
import {
  // FiHome,
  // FiTrendingUp,
  // FiCompass,
  // FiStar,
  // FiSettings,
  FiMenu,
  FiBell,
  // FiChevronDown,
} from 'react-icons/fi';
import { AiOutlineAppstore } from 'react-icons/ai';
import {
  MdOutlineCases,
  MdReceiptLong,
  MdOutlineReceipt,
  MdOutlinePeopleAlt,
} from 'react-icons/md';
// import { GrNotes } from 'react-icons/gr';
// import { BiBarChartSquare } from 'react-icons/bi';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { HiOutlineLogout } from 'react-icons/hi';

const LinkItems = [
  {
    name: 'Dashboard',
    icon: AiOutlineAppstore,
    destination: '/user/dashboard',
  },
  { name: 'Profile', icon: MdOutlineReceipt, destination: '/user/profile' },
  {
    name: 'Medical History',
    icon: MdOutlinePeopleAlt,
    destination: '/user/customer',
  },
  {
    name: 'Treatment Pricing',
    icon: MdOutlinePeopleAlt,
    destination: '/customer',
  },
  {
    name: 'Appointments',
    icon: MdOutlinePeopleAlt,
    destination: '/customer',
  },
  {
    name: 'Billing & Payments',
    icon: MdOutlinePeopleAlt,
    destination: '/customer',
  },
  {
    name: 'Notifications',
    icon: MdOutlinePeopleAlt,
    destination: '/customer',
  },
  {
    name: 'Settings',
    icon: MdOutlineCases,
    destination: '/service-and-product',
  },
  { name: 'Report', icon: MdReceiptLong, destination: '/transaction' },
  { name: 'Support', icon: MdReceiptLong, destination: '/transaction' },
  { name: 'Logout', icon: HiOutlineLogout, destination: '/report' },
];

export default function Sidebar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();

  // Map the route paths to their corresponding headers
  const headerMap = {
    '/user/dashboard': 'Dashboard',
    '/invoice': 'Invoice',
    '/invoice/create-invoice': 'Invoice',
    '/invoice/create-invoice/saved-invoice': 'Invoice',
    '/customer': 'Customer',
    '/service-and-product': 'Service / Product',
    '/transaction': 'Transaction',
    '/report': 'Report',
    '/account-details/other-settings': 'Account details',
    '/account-details/personal-information': 'Account details',
    '/account-details/business-information': 'Account details',
    '/account-details/kyc-details': 'Account details',
    '/account-details/account-settings': 'Account details',
  };
  const currentPath = location.pathname;
  const currentHeader = headerMap[currentPath];

  return (
    <Box minH="100vh" w="full">
      <SidebarContent
        bg="background"
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} header={currentHeader} />
      <Box ml={{ base: 0, md: 60 }} h="full" p="4" bg="#FFFFFF">
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      color="white"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem
          onClose={onClose}
          key={link.name}
          icon={link.icon}
          destination={link.destination}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, destination, children, onClose, ...rest }) => {
  const linkStyles = useStyleConfig('Link');
  const location = useLocation();

  const isHomeActive = location.pathname === `${destination}` ? true : false;

  console.log(location.pathname);
  console.log(destination);
  return (
    <Link to={destination} _focus={{ boxShadow: 'none' }}>
      <Flex
        position={'relative'}
        align="center"
        p="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        fontSize={'sm'}
        style={
          isHomeActive
            ? {
                borderRadius: '0',
                backgroundColor: '#2460F4',
              }
            : linkStyles
        }
        _hover={{
          borderRadius: '0',
          backgroundColor: '#2460F4',
        }}
        {...rest}
      >
        {/* <Text
          position="absolute"
          style={
            isHomeActive
              ? {
                  color: '#8CC7FF',
                }
              : { color: '#f6f6f6' }
          }
          _groupChecked={{ color: '#8CC7FF' }}
          color="white"
          fontSize="7xl"
          left="0"
          bottom={'0'}
        >
          .
        </Text> */}
        {icon && <Icon mr="4" color={'white'} fontSize="20" as={icon} />}
        {children}
      </Flex>
    </Link>
  );
};

const Activities = ({ icon, activities, status, date }) => {
  return (
    <Flex py="3">
      <Box pt="2">{icon}</Box>
      <Box pl="3">
        <Text color="#0A0A0A" fontSize={'sm'} maxW="60">
          {activities}
        </Text>

        <Text fontWeight={'bold'} fontSize={'xs'} color="#164C77">
          {date}
        </Text>
      </Box>
    </Flex>
  );
};

const MobileNav = ({ onOpen, header, ...rest }) => {
  const [merchantDetails, setMerchantDetails] = useState([]);
  const [isLoadingd, setIsLoadingd] = useState(true);

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}
    >
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: 'none', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Logo
      </Text>
      <HStack w="full" justifyContent={'space-between'}>
        <Text pl="5" fontWeight={500} fontSize={'28'} color={'black'}>
          {/* {header} */}
        </Text>

        <HStack spacing={{ base: '0', md: '6' }}>
          <Menu>
            <MenuButton>
              <IconButton
                size="lg"
                variant="ghost"
                aria-label="open menu"
                icon={<FiBell />}
              />
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}
            >
              <MenuItem>
                <Activities
                  icon={<MdOutlineReceipt />}
                  activities={'Invoice #1002 to BGL Limited was Opened'}
                  date="Apr 16, 2023 at 10:14 AM"
                />
              </MenuItem>
            </MenuList>
          </Menu>

          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                py={2}
                transition="all 0.3s"
                _focus={{ boxShadow: 'none' }}
              >
                <HStack flexDirection={'row-reverse'}>
                  {/* <Box display={{ base: 'none', md: 'flex' }}>
                    <FiChevronDown color='#0091FF' />
                  </Box> */}
                  <Avatar size={'sm'} src={merchantDetails?.merchantLogo} />
                  <VStack
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    <Text fontWeight={'medium'} fontSize="sm">
                      {merchantDetails?.businessName}
                    </Text>
                    {/* <Text fontSize="xs" color="gray.600">
                      Paylode Services
                    </Text> */}
                  </VStack>
                </HStack>
              </MenuButton>
              {/* <MenuList
                bg={useColorModeValue('white', 'gray.900')}
                borderColor={useColorModeValue('gray.200', 'gray.700')}>
                <MenuItem>
                  <Box>
                    <Text color='#5C5C5C' fontWeight={'medium'} fontSize={'18px'}>Paylode Services</Text>
                    <Text color='#838383' fontSize={'sm'}>Ajoke Animashaun Janet</Text>
                  </Box>
                </MenuItem>
                <MenuDivider />
                <MenuItem>
                  <Link to='/account-details/personal-information'>
                    <Flex gap='1'>
                      <BsPerson color='#A0AEC0' size='24' />
                      <Text fontWeight={'medium'} color='#1A202C'>Account details</Text>
                    </Flex>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Flex gap='1'>
                    <BiLogOut color='#A0AEC0' size='24' />
                    <Text fontWeight={'medium'} color='#EF4444'>Log out</Text>
                  </Flex>
                </MenuItem>

              </MenuList> */}
            </Menu>
          </Flex>
        </HStack>
      </HStack>
    </Flex>
  );
};
