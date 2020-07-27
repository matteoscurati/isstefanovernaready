import { Helmet } from 'react-helmet';

// Grommet
import {
  Grommet,
  Box,
  Heading,
} from 'grommet';

const HomePage = () => (
  <Grommet plain>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Is Stefano Verna ready?</title>
      <link rel="canonical" href="https://isstefanovernaready.com" />
      <meta name="description" content="A useful tool to know if Stefano Verna is ready" />
    </Helmet>
    <Box
      background=""
      height="100vh"
      width="100%"
      align="center"
      justify="center"
    >
      <Heading level="1" color="brand">
        YES
      </Heading>
    </Box>
  </Grommet>
);

export default HomePage;
