import { Flex, Box, Image, Icon} from "@chakra-ui/react";
import Link from "next/link";
import Logo from "./Logo";
import { FiChevronLeft } from "react-icons/fi";

type HeaderProps = {
  goBack?: boolean;
};

export default function Header({goBack= false}: HeaderProps) {  
  return (
    <Box w="100%">
      <Flex
      as="header"
      maxW={1240}
      mx="auto"
      py={8}             
      px={{base: 4, xl: 0}}
      >
      {goBack &&
      <Link href="/">
        <a>
          <Icon as={FiChevronLeft} h={8} w={8}  color="gray.900"/>
        </a>
      </Link>
      }
      <Flex w="100%" justify="center">
        <Logo />
      </Flex>
    </Flex>
    </Box>
  )
}
