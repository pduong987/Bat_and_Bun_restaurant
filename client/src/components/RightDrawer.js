import React from 'react';
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';



const RightDrawer = ({ menuItems }) => {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="menu-overlay"
    >
      <IconButton
        className="close-icon"
        size="large"
        aria-label="close menu"
        color="inherit"
        onClick={toggleDrawer(anchor, true)}
      >
        <CloseIcon />
      </IconButton>
      <List>
        {menuItems.map((menu, i) => (
          <ListItem
            button key={menu.menuName}
            component="a"
            href={menu.menuLink}
          >
            <ListItemText primary={menu.menuName} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            className="dot-menu-icon"
            size="large"
            aria-label="display more actions"
            edge="end"
            color="inherit"
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </>
  );
}

export default RightDrawer;
