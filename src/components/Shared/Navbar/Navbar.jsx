
import { useState, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AppBar, Box, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, Avatar, Button, Container, Menu, MenuItem } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AuthContext from '../../../providers/AuthContext/AuthContext';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import logo from '../../../../public/logo.png';
import { RiMenuUnfold3Line } from 'react-icons/ri';
import { LuUserCircle2 } from 'react-icons/lu';

const pages = [

  { name: 'Home', path: '/' },
  { name: 'Donate Blood', path: '/donate-blood' },
  { name: 'Find Blood', path: '/find-blood' },
  { name: 'Campaigns', path: '/campaigns' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact-us' },

];

function Navbar() {

  const { user, LogOut, loading } = useContext(AuthContext);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorElUser(null);
console.log(user)
  const handleLogOut = () => {
    LogOut()
      .then(() => handleCloseUserMenu())
      .catch((error) => console.log(error));
  };

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (

    <AppBar position="static" color='' >

      <Container maxWidth="full" >

        <Toolbar disableGutters>

          {/* Logo for Desktop screen */}
          <Typography
            variant="h3"
            noWrap
            component={Link}
            to="/"
            sx={{
              display: { xs: 'none', md: 'none', lg: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.5rem',
              textDecoration: 'none',
            }}
          >
            <div className='flex items-center gap-2'>

              <img className='w-12'
                src={logo}
                alt="LBDG" />

              <h2 className="bg-gradient-to-r from-[#FF0000] to-[#8B0000] bg-clip-text text-transparent">LBDG</h2>

            </div>

          </Typography>

          {/* Mobile Menu Icon / Menu Drawer */}
          <Box
            sx={{
              display: { xs: 'flex', md: 'none', lg: "none", },
              justifyContent: "center",
              width: "50px",
            }}>

            <IconButton size="large" onClick={toggleDrawer(true)}>
              <RiMenuUnfold3Line className='text-[#FF0000]' />
            </IconButton>

            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)} >
              <Box
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
                sx={{
                  width: 200,
                  color: "#000000",
                  padding: "0px 16px"
                }}
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  py={1} >

                  <Typography variant="h6" mx={1} >Menu</Typography>

                  <IconButton onClick={toggleDrawer(false)} >
                    <CloseIcon className='text-[#FF0000] font-bold' />
                  </IconButton>

                </Box>

                <List sx={{ boxShadow: "2", borderRadius: "6px", marginTop: "4px" }}>
                  {pages.map((page) => (
                    <ListItem
                      to={page.path}
                      button key={page.name}
                      component={Link}
                      sx={{
                        '&:hover': { color: '#FF0000', },
                        '&.active': { color: '#FF0000' },
                      }}>
                      <ListItemText
                        primary={page.name}
                      />
                    </ListItem>
                  ))}
                </List>

              </Box>

            </Drawer>

          </Box>

          {/* Logo for Mobile (Small Device) */}
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              display: { xs: 'flex', md: 'none', lg: 'none' },
              flexGrow: 1,
              justifyContent: "center",
              fontWeight: 600,
              fontFamily: 'monospace',
              letterSpacing: '.2rem',
              textDecoration: 'none',
            }}
          >

            <div className='flex items-center gap-1'>

              <img className='w-8'
                src={logo}
                alt="LBDG" />

              <h2 className="bg-gradient-to-r from-[#FF0000] to-[#8B0000] bg-clip-text text-transparent">LBDG</h2>

            </div>

          </Typography>

          {/* Logo for Tablet (Medium Device) */}
          <Typography
            variant="h4"
            noWrap
            component={Link}
            to="/"
            sx={{
              display: { xs: 'none', md: 'flex', lg: 'none' },
              flexGrow: 0,
              fontWeight: 600,
              fontFamily: 'monospace',
              letterSpacing: '.2rem',
              textDecoration: 'none',
            }}
          >

            <div className='flex items-center gap-1'>

              <img className='w-8'
                src={logo}
                alt="LBDG" />

              <h2 className="bg-gradient-to-r from-[#FF0000] to-[#8B0000] bg-clip-text text-transparent">LBDG</h2>

            </div>

          </Typography>

          {/* Desktop Menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex', lg: 'flex' },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                component={NavLink}
                to={page.path}
                sx={{
                  fontSize: { md: '12px', lg: '14px' },
                  fontWeight: "600",
                  mx: { xs: '0px', md: '2px', lg: '6px' },
                  color: '#333333',
                  '&:hover': { color: '#FF0000', backgroundColor: "transparent" },
                  '&.active': { color: '#FF0000' },

                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* User Menu or Auth Buttons */}
          <Box sx={{ flexGrow: 0, }}>
            {user ? (
              <>
                <IconButton onClick={handleOpenUserMenu} sx={{ padding: "0px", }}>

                  <Avatar
                    src={user?.photo || <LuUserCircle2 />}
                    sx={{ bgcolor: " ", color:"red", border:"1px solid red" }}>
                  </Avatar>

                </IconButton>

                <Menu
                  sx={{
                    mt: '50px',
                    '& .MuiPaper-root': {
                      background: 'linear-gradient(135deg, #FF8A80, #D50000)',
                      color: '#ffffff',
                      width: '200px',
                      maxHeight: '300px',
                      overflowX: 'hidden',
                      overflowY: 'auto',
                      border: '1px solid #8B0000',
                      borderRadius: '8px',
                      padding: "6px"
                    }
                  }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                  keepMounted
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >

                  <div className='flex flex-col items-center justify-center gap-2 mb-2'>

                    <Avatar sx={{ width: "50px", height: "50px" }}
                      alt={user?.name || 'User'}
                      src={user?.photo || '/static/images/avatar/2.jpg'} />

                    <Typography textAlign="left" fontSize={20}>
                      {user?.name || 'Unknown'}
                    </Typography>

                  </div>

                  <div className='mt-2 '>

                    <MenuItem >
                      <Typography textAlign="center">Profile</Typography>
                    </MenuItem>

                    <MenuItem >
                      <Typography textAlign="center">Setting</Typography>
                    </MenuItem>

                    <MenuItem onClick={handleLogOut}>
                      <Typography textAlign="center">Log Out</Typography>
                    </MenuItem>
                  </div>

                </Menu>

              </>

            ) : (
              <Box sx={{ display: 'flex', gap: 2 }}>
                {/* Login Button */}
                <Button
                  component={Link}
                  to="/login"
                  variant="outlined"
                  sx={{
                    padding: { xs: "2px 6px", md: "4px 10px", lg: "4px 12px" },
                    fontSize: { xs: "10px", md: "12px", lg: "14px" },
                    borderColor: '#FF0000',
                    color: '#FF0000',
                    backgroundColor: 'white',
                    '&:hover': {
                      color: 'white',
                      backgroundColor: '#FF0000',
                      borderColor: '#FF0000',
                    },
                  }}
                >
                  Log In
                </Button>

                {/* Register Button */}
                <Button
                  component={Link}
                  to="/register"
                  variant="contained"
                  sx={{
                    padding: { xs: "2px 6px", md: "4px 10px", lg: "4px 12px" },
                    fontSize: { xs: "10px", md: "12px", lg: "14px" },
                    color: 'white',
                    backgroundColor: '#FF0000',
                    border: '1px solid #FF0000',
                    '&:hover': {
                      color: '#FF0000',
                      backgroundColor: 'white',
                      // Red border on hover
                    },
                  }}
                >
                  Register
                </Button>
              </Box>
            )}

          </Box>

        </Toolbar>

      </Container>

    </AppBar>

  );
}

export default Navbar;


