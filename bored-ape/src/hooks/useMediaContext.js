import { useContext } from 'react';
import { MediaContext } from '../context/MediaContext.js';

export const useMediaContext = () => {
    return useContext(MediaContext);
}
