import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

interface CardProps {
  title: string;
  image: string;
  flag: string;
  description: string;
}

export default function Card({ title, image, flag, description }: CardProps) {
  return (
    <Box w='100%' borderRadius="4px">
      <Image src={image} borderTopRadius="4px" borderLeftRadius="4px" />
      <Flex 
      w='100%' 
      bgColor="white" 
      p="24px" 
      justify="space-between" 
      align="center" 
      border="1px" 
      borderColor="yellow.500" 
      borderTop="none"
      borderBottomRadius={4}      
      >
        <Flex w="100%" textAlign="left" flexDirection="column">
        <Heading fontSize="20px" fontWeight="bold" color="gray.900" pb="24px">{title}</Heading>
        <Text fontSize="16px" color="gray.600">{description}</Text>
        </Flex>
        <Flex justify="flex-end" w="100%">
          <Image src={flag} borderRadius="50%" w={30} h={30} />
        </Flex>
      </Flex>
  </Box> 
  )
}
