import { Home } from "./pages/Home"
import { useMediaQuery } from '@chakra-ui/react';
import { MEDIA_QUERY_DESKTOP, MEDIA_QUERY_MOBILE } from './constants.js';
import { MediaProvider } from "./context/MediaContext.js"

function App() {
  const [isMobile, isDesktop] = useMediaQuery([MEDIA_QUERY_MOBILE, MEDIA_QUERY_DESKTOP]);
  const mediaType = { isMobile, isDesktop };

  return (
    <MediaProvider mediaType={mediaType}>
      <Home />
    </MediaProvider>
  );

}

export default App;
