import "@fontsource/manrope"
import { addDecorator } from '@storybook/react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { theme } from "../src/theme/index.js"


addDecorator(stories => {

  return (
    <ChakraProvider theme={theme} resetCSS>
      {stories()}
    </ChakraProvider>
  );
});