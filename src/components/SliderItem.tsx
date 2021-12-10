import { Center, Flex, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

interface SwiperSlideItemProps {
  title: string
  description: string
  image: string
  link: string
}

export function SliderItem({ title, description, image, link }: SwiperSlideItemProps): JSX.Element  {
  return (    
    <Center bgImg={`url(${image})`} bgRepeat="no-repeat" h={460} w="100%">                                             
      <Center as={Link}  href={link} passHref>
      <Flex as="a" flexDirection="column" align="center">
        <Heading>{title}</Heading>
        <Text>{description}</Text>
      </Flex> 
      </Center>  
    </Center>    
  )
}
