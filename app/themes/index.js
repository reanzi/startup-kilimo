import {DefaultTheme} from '@react-navigation/native';

const lightTheme = {
  dark: false,
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFFFF',
    white: '#ffffff',
    black: '#000000',
    darkBlue: '#2A3642',
    primary: '#FFAC30',
    secondary: '#F1F3F6',
    grey: '#9d9fa3',
    success: '#38C2B7',
    error: '#E14161',
    text1: '#1B1D28',
    text2: '#3A4276',
    text3: '#7B7F9E',
    boxBackground: '#F1F3F6',
  },
};
const darkTheme = {
  dark: true,
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#171822',
    white: '#f8f8f8',
    black: '#223',
    darkBlue: '#2A3642',
    primary: '#FFAC30',
    secondary: '#03DAC5',
    grey: '#9d9fa3',
    success: '#38C2B7',
    error: '#E14161',
    text1: '#e5e5e5',
    text2: '#7B7F9E',
    text3: '#7B7F9E',
    boxBackground: '#212330',
  },
};

export {lightTheme, darkTheme};
