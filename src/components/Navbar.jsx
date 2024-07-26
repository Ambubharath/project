import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

const MenuButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
  '&:hover': {
    backgroundColor: 'transparent',
  },
}));

const drawerWidth = 240;

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ 
        background: 'transparent', // Make the AppBar background transparent
        boxShadow: 'none', // Remove the box shadow
      }}>
        <Toolbar>
          <MenuButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </MenuButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'Roboto, sans-serif', fontWeight: 700 }}>
            {/* You can add any text or leave it empty */}
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            background: 'linear-gradient(45deg, #2196f3, #9c27b0)', // Blue-violet gradient
            color: '#fff',
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 400,
          },
        }}
      >
        <List>
          <ListItem button component={Link} to="/" sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>
            <ListItemText primary="View" />
          </ListItem>
          <ListItem button component={Link} to="/password" sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>
            <ListItemText primary="Password" />
          </ListItem>
          <ListItem button sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>
            <ListItemText primary="Events" />
          </ListItem>
          <ListItem button sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>

      {/* Content outside Drawer */}
      <Box sx={{ ml: drawerOpen ? drawerWidth : 0, mt: 2, transition: 'margin-left 0.3s ease' }}>
        {/* <img
          src="https://cdn-icons-png.freepik.com/512/5539/5539922.png"
          alt="not found"
          width="200"
          height="200"
        /> */}
      </Box>
    </Box>
  );
};

export default Navbar;
