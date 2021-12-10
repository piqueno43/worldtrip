import { Box as Flex, Image, Text } from "@chakra-ui/react";

interface TravelTypesProps {  
  image: string;
  text: string;
}

export default function TravelTypes({ image, text}: TravelTypesProps) {
  return (
    <Flex textAlign="center" textTransform="lowercase" fontSize={24} flex="0 1 100%" h={145} justify="center" flexDirection="column" align="center" display="flex">
      <Image src={image} alt={text}/>
      <Text color="gray.900">{text}</Text>
    </Flex>
  )
}
