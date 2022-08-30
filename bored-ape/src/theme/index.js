import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import colors from "./colors.js"
import sizes from "./sizes.js"
import fonts from './fonts';

const styles = {
    global: props => ({
        body: {
            bg: mode("#14142B", "#14142B")(props),
        },
    }),
};

export const theme = extendTheme({
    styles,
    colors,
    sizes,
    space: sizes,
    ...fonts,
})