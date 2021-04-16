import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#9A71BD',
    darkPrimary: '#722183',
    lightPrimary: '#C2A8CF',
    secondary: '#47525E',
    darkSecondary: '#333',
    lightSecondary: '#FFF',
    violet: '#8e4a89',
    lightViolet: '#c2a8cf3b',
    grey: '#f4f5f7',
  },
  fonts: ['Roboto', 'sans-serif'],
  fontSizes: {
    small: '1rem',
    medium: '2rem',
    large: '2.5rem',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
