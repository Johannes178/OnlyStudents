import {
  AppBar,
  Box,
  Button,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MediaContext } from "../contexts/MediaContext";
import { useUser } from "../hooks/ApiHooks";
import { AccountCircle, CloudUpload, Folder } from "@mui/icons-material";
import Huutiset from "../views/Huutiset";

const Nav = () => {
  const { user, setUser } = useContext(MediaContext);
  const [open, setOpen] = useState(false);
  const { getUser } = useUser();
  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
      const userData = await getUser(localStorage.getItem("token"));
      console.log(userData);
      setUser(userData);
    } catch (err) {
      setUser(null);
      navigate("/");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  console.log(user, open);

  return (
    // huutiset
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            OnlyStudents
          </Typography>
          <Button
            component={Link}
            to={user ? "/logout" : "/login"}
            color="inherit"
          >
            {user ? "Logout" : "Login"}
          </Button>
          <Button component={Link} to={user ? "/huutiset" : "/huutiset"} color="inherit">
            {user ? "Huutiset" : "Huutiset"}
          </Button>
          <Button
            component={Link}
            to={user ? "/about" : "/about"}
            color="inherit"
          >
            {user ? "About" : "About"}
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        open={open}
        onClose={() => {
          setOpen(!open);
        }}
      >
        <List
          onClick={() => {
            setOpen(!open);
          }}
        >
          <ListItemButton component={Link} to={"/huutiset"}>
            <ListItemIcon>
              <Huutiset />
            </ListItemIcon>
            <ListItemText primary="Huutiset" />
          </ListItemButton>
          {user && (
            <>
              <ListItemButton component={Link} to="/profile">
                <ListItemIcon>
                  <AccountCircle />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
              <ListItemButton component={Link} to="/upload">
                <ListItemIcon>
                  <CloudUpload />
                </ListItemIcon>
                <ListItemText primary="Upload" />
              </ListItemButton>
              <ListItemButton component={Link} to="/myfiles">
                <ListItemIcon>
                  <Folder />
                </ListItemIcon>
                <ListItemText primary="My Files" />
              </ListItemButton>
            </>
          )}
        </List>
      </Drawer>
    </Box>
  );
};

export default Nav;
