import { Flex,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Grid,
  Box,
  HStack,
  VStack,
  Image,
  Center,
  Icon,
  Button,
  Spinner,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { FiInfo } from "react-icons/fi";
import Card from "../../components/Card";
import Header from "../../components/Header";
import { useContinent } from "../../hooks/useContinent";

export default function Continente({ id } ) {    
  const { data, isLoading, error } = useContinent(id);

  return (
    <>
     <Header goBack={true}/>
     {isLoading ? (
       <Flex justify="center">
         <Spinner color="yellow.500" size="lg"/>
       </Flex>
      ) : error ? (
        <Flex justify="center">
          <Text color="gray.900"> Falha ao obter os dados por continents </Text>
        </Flex>
      ) : (
        <Flex 
        bgImg={`url('https://source.unsplash.com/random/1440x500/?${data?.continent?.slug}')`}
        bgSize="cover"
        bgPos="center"
        bgRepeat="no-repeat"
        bgAttachment="fixed"
        h={500}
        align="self-end"
        >
          <Container maxW={1240} pb="60px">
            <Heading fontFamily="Poppins" fontSize="48px">{data?.continent?.name}</Heading>
          </Container>
        </Flex>
        )}
      <Container maxW={1240}>
      <SimpleGrid columns={2} spacing={10} py="80px">
        <Text color="gray.900">
        {data?.continent?.text}
        </Text>
        <HStack>
          <Center w='170px' h='100px'>
            <VStack>
              <Box as="span" fontSize="48px" color="yellow.500">{data?.continent?.number_of_countries}</Box>
              <Text as="span" fontSize="24px" color="gray.900">países</Text>
            </VStack>
          </Center>
          <Center w='170px' h='100px'>
            <VStack>
              <Box as="span" fontSize="48px" color="yellow.500">{data?.continent?.number_of_languages}</Box>
              <Text as="span" fontSize="24px" color="gray.900">línguas</Text>
            </VStack>
          </Center>
          <Center w='170px' h='100px'>
            <VStack>
              <Box as="span" fontSize="48px" color="yellow.500">{data?.continent?.number_of_cities}</Box>
              <Text as="span" fontSize="19px" color="gray.900" display="flex"  alignItems="center">cidades +100 <Icon as={FiInfo} ml="5px"/> </Text>
            </VStack>
          </Center>
        </HStack>
      </SimpleGrid>
      <Heading fontSize="36px" fontWeight="500" color="gray.900">Cidades +100</Heading>
      <Grid templateColumns='repeat(4, 1fr)' gap={6} mb={10}>
        {isLoading ? (
          <Flex justify="center">
            <Spinner color="yellow.500" size="lg"/>
          </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text> Falha ao obter os dados por continents </Text>
            </Flex>
          ) : ( 
          <>
            {data?.continent?.countries.map((city) => (
              <Card           
              key={city.id}
              image={`https://source.unsplash.com/random/286x203/?${city.name}`}
              title={city.name}
              description={city.capital}
              flag={city.flag}
            />  
            ))}
            </>
          )}
      </Grid>
      </Container>
    </>
  )
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: [],
//     fallback: 'blocking',
//   };
// }

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params;

  return {
    props: {
      id,
    },
  };  
}


  // try {
  //   const { continent } = await getContinent(String(id));    

  //   return {
  //     props: {
  //       id,
  //       continent,
  //     },
  //   };
  // } catch (error) {
  //   return {
  //     props: {
  //       error: error.message,
  //     },
  //   };
  // }
// }