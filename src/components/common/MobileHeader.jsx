import HamMenu from './HamMenu';
import {
  Link,
  Text,
  Box,
  Flex,
  List,
  ListItem,
  UnorderedList,
  Image,
} from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';

const MobileHeader = () => {
  return (
    <Flex
      bgColor="red"
      bgImage="url('images/headd2.png')"
      bgRepeat="repeat-x"
      height="80px"
    >
      <Flex
        align="center"
        flexDirection="row"
        width="100%"
        justify="space-between"
      >
        <Link as={ReachLink} to="/home" _focus={{ border: '0px' }}>
          <Image
            src="/images/doclab-logo.png"
            marginLeft="40px"
            height="50px"
            alt="Doclab-logo"
          />{' '}
        </Link>

        <Box marginEnd="30px">
          <HamMenu />
        </Box>
      </Flex>
    </Flex>
  );
};

export default MobileHeader;
