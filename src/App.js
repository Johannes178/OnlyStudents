import {Container} from '@mui/material';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import {MediaProvider} from './contexts/MediaContext';
import {themeOptions} from './theme/themeOptions';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import AnimatedRoutes from './components/AnimatedRoutes';

const theme = createTheme(themeOptions);

const App = () => {
  return (
    // eslint-disable-next-line no-undef
    <Router basename={process.env.PUBLIC_URL}>
      <MediaProvider>
        <ThemeProvider theme={theme}>
          <Container maxWidth="lg">
            <Nav />
            <AnimatedRoutes />
          </Container>
        </ThemeProvider>
      </MediaProvider>
    </Router>
  );
};

export default App;
