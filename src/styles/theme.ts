import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    white: {
      "200": '#fafafa',
      "100": '#f5f8fa',
      "50": '#fff',
    },
    black: {
      "900": '#000',
      "500": '#47585b',
    },
    gray: {
      "900": "#181B23",
      "800": "#1F2029",
      "700": "#47585b",
      "600": "#4B4D63",
      "500": "#616480",
      "400": "#797D9A",
      "300": "#999999",
      "200": "#B3B5C6",
      "100": "#D1D2DC",
      "50": "#EEEEF2",
    },
    yellow: {
      "500": "#ffba08",
      "400": "#ffc908",
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',

  },
  styles: {
    global: {
      body: {
        bg: 'white.100',
        color: 'gray.50'
      }
    }
  }
})