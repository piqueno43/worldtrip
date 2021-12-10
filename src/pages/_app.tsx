import { AppProps } from 'next/app';
import { theme } from '../styles/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { makeServer } from '../services/mirage';
import { queryClient } from '../services/queryClient';
import { QueryClientProvider } from 'react-query';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import '../styles/swiper-vars.scss';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

function WorldTrip({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
    </QueryClientProvider>
  )
}

export default WorldTrip
