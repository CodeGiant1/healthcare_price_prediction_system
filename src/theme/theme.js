// src/theme.js

import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: '#10B43E',
    secondary: '#28a745',
    accent: '#ffc107',
    background: '#262833',
    text: '#343a40',
    error: '#dc3545',
    neutral: '#6c757d',
    sidebarBackground: '#0C2383',
  },
});

export default theme;
