import 'reset-css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Main from './Main';

const theme = extendTheme({
  colors: {
    gray: {
      100: '#F5f5f5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '757575',
      800: '424242',
      900: '212121',
    },
  },
  components: {
    Button: {
      variants: {
        link: {
          ':focus': {
            outline: 'none',
            boxShadow: 'none',
          },
        },
      },
    },
  },
});

const App = () => {
  return(
  <ChakraProvider theme={theme}>
    <Main />
  </ChakraProvider>);
};

export default App;
