import {Container} from '@mui/material';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import {MediaProvider} from './contexts/MediaContext';
import {themeOptions} from './theme/themeOptions';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import About from './views/About';
import Huutiset from './views/Huutiset';
import Login from './views/Login';
import Logout from './views/Logout';
import Modify from './views/Modify';
import MyFiles from './views/MyFiles';
import Profile from './views/Profile';
import Register from './views/Register';
import Single from './views/Single';
import Start from './views/Start';
import Upload from './views/Upload';

const theme = createTheme(themeOptions);

const App = () => {
  return (
    // eslint-disable-next-line no-undef
    <Router basename={process.env.PUBLIC_URL}>
      <MediaProvider>
        <ThemeProvider theme={theme}>
          <Container maxWidth="lg">
            <Nav />
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Start />} />
              <Route path="/huutiset" element={<Huutiset />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<About />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/single" element={<Single />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/upload" element={<Upload />} />
              <Route path="/myfiles" element={<MyFiles />} />
              <Route path="/modify" element={<Modify />} />
            </Routes>
          </Container>
        </ThemeProvider>
      </MediaProvider>
    </Router>
  );
};

export default App;
