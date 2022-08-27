import { extendTheme } from '@chakra-ui/react';
import colors from "./colors.js"
import sizes from "./sizes.js"
import fonts from './fonts';

export const theme = extendTheme({
    colors,
    sizes,
    space: sizes,
    ...fonts,
})