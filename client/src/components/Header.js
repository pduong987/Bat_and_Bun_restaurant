import { styled } from '@mui/material/styles';
import {
  useMediaQuery,
  Box,
  Link,
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useAuth } from '../contexts/AuthContext';

import RightDrawer from './RightDrawer';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'center',
  paddingTop: theme.spacing(.5),
  paddingBottom: theme.spacing(.5),
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 64,
  },
}));

const Header = () => {
  const matches = useMediaQuery('(min-width:600px)');
  const { currentUser } = useAuth();
  
  // Menu Items
  const menuItems = [
    {
      menuName: 'Home',
      menuLink: '/'
    },
    {
      menuName: 'About',
      menuLink: '/about'
    },
    {
      menuName: currentUser && currentUser ? 'Dashboard' : 'Admin Log In',
      menuLink: currentUser && currentUser ? '/dashboard' : '/admin-login'
    },
    {
      menuName: 'Track Order',
      menuLink: '/track-order'
    }
  ];

  return (
    <AppBar position="static">
      <StyledToolbar>
        <div>
          <img
            src="./img/bat-bun-logo.png"
            alt="Bat + Bun Logo"
            className="logo"
            onClick={e => window.location.href='/'}
          />
        </div>
        <div>
          {matches &&
            <Box className="main-menu">
              {menuItems.map(menu => (
                <Link
                  key={menu.menuName}
                  href={`${menu.menuLink}`}
                >
                  {menu.menuName}
                </Link>
              ))}
            </Box>
          }
        </div>
        <div>
          <MenuItem>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              disableRipple
            >
              <Badge
                badgeContent={3}
                color="error"
              >
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </MenuItem>
          {!matches &&
            <RightDrawer menuItems={menuItems} />
          }
        </div>
      </StyledToolbar>
    </AppBar>
  );
}

export default Header;
