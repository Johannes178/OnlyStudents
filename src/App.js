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
import EditProfile from './views/EditProfile';

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
              <Route path="/~johannvj/onlystudents/" element={<Start />} />
              <Route
                path="/~johannvj/onlystudents/huutiset"
                element={<Huutiset />}
              />
              <Route path="/~johannvj/onlystudents/login" element={<Login />} />
              <Route path="/~johannvj/onlystudents/about" element={<About />} />
              <Route
                path="/~johannvj/onlystudents/register"
                element={<Register />}
              />
              <Route
                path="/~johannvj/onlystudents/profile"
                element={<Profile />}
              />
              <Route
                path="/~johannvj/onlystudents/single"
                element={<Single />}
              />
              <Route
                path="/~johannvj/onlystudents/logout"
                element={<Logout />}
              />
              <Route
                path="/~johannvj/onlystudents/upload"
                element={<Upload />}
              />
              <Route
                path="/~johannvj/onlystudents/myfiles"
                element={<MyFiles />}
              />
              <Route
                path="/~johannvj/onlystudents/modify"
                element={<Modify />}
              />
              <Route
                path="/~johannvj/onlystudents/editprofile"
                element={<EditProfile />}
              />
            </Routes>
          </Container>
        </ThemeProvider>
      </MediaProvider>
    </Router>
  );
};

export default App;
