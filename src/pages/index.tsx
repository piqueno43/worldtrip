import { 
  Flex, 
  Box, 
  Grid, 
  Text, 
  Image, 
  HStack,  
  SimpleGrid, 
  Container, 
  Spinner 
} from '@chakra-ui/react';
import Header from "../components/Header";
import TravelTypes from '../components/TravelTypes';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { getContinents, useContinents } from '../hooks/useContinents';
import { SliderItem } from '../components/SliderItem';
import { GetServerSideProps } from 'next';

const travelTypes = [
  { image: '/assets/vida-noturna.svg', title: 'vida noturna',},
  { image: '/assets/praia.svg', title: 'praia'},
  { image: '/assets/moderno.svg', title: 'moderno'},
  { image: '/assets/classico.svg', title: 'clássico'},
  { image: '/assets/globo.svg', title: 'e mais...'},
];

export default function Home({ continents }) {  
  const { data, isLoading, error,  } = useContinents({
    initialData: continents,
  });   
  
  return (
    <>
      <Header />
      <Flex h={{base: 163, md: 368}} w="100%" my="6" mx="auto" m="inherit auto" bgImg="/assets/background.png" bgRepeat="no-repeat" bgSize="cover" justify="center"
      bgPos="center center"  align="center"       
      >
        <Container maxW={1240}>
          <SimpleGrid columns={2} spacing={10}>
            <Box  paddingBlock={9} align="start" justify="center">
              <Text fontSize="36px" fontWeight="bold">5 Continentes, infinitas possibilidades.</Text>
              <Text fontSize="20px" fontWeight="normal" lineHeight="30px"mt={5}> Chegou a hora de tirar do papel a viagem que você sempre sonhou. </Text>
            </Box>
            <Flex 
              pos="relative"
              top="70px"
            justify="flex-end">
              <Image src="/assets/airplane.svg" alt="Airplane" />
            </Flex>
          </SimpleGrid>
        </Container>        
      </Flex>
      <Container maxW={1240}  justify="space-between" mt={20} display="flex">
        <HStack w={1240} m="0 auto" spacing={12} justify="space-between">
          {travelTypes.map((travel, index) => (
            <TravelTypes key={index} image={travel.image} text={travel.title} />
          ))}
        </HStack>
      </Container>
      <Flex w="90px" justify="center" m="50px auto" border="1px solid" borderColor="gray.900"/>
      <Text fontSize="20px" fontWeight="bold" textAlign="center" mt={20} color="black.500">
      Vamos nessa? <br />
      Então escolha seu continente
      </Text>        
    <Container  maxW={1240} centerContent h={450} my={10}>           
        {isLoading ? (
        <Flex justify="center">
          <Spinner />
        </Flex>
        ) : error ? (
          <Flex justify="center">
            <Text>Falha ao obter os dados dos continents</Text>
          </Flex>
          ) : (
            <Swiper 
          style={{ height: '100%', width: '100%' }}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation 
          centeredSlides  
          pagination={{ clickable: true }}                          
          slidesPerView={1}          
        >
          {data.continents.map(continent => (
            <SwiperSlide key={continent.id}>
              <SliderItem 
              image="/assets/europa.png"
              title={continent.name}
              description={continent.description}
              link={`/continent/${continent.id}`}
            />
          </SwiperSlide>      
          ))}

        </Swiper>
        )}
      </Container>       
    </>    
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
   try {
    const {continents} = await getContinents();

    return {
      props: {
        continents,
      },
    };
  } catch (error) {
    return {
      props: {
        error: error.message,
      },
    };
  }
};
 