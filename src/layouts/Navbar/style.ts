import { Typography, Box, styled } from '@mui/material';
//TOP BAR
export const TopBarWrap = styled(Box)(({ theme }) => ({
  height: '25px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#55B84B',
  padding: '0 1rem',
  overflow: 'hidden',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));
export const TopBarItem = styled(Box)(() => ({
  display: 'flex',
}));
export const MuiBtnWrap = styled(Typography)(() => ({
  fontSize: '0.7rem',
  fontFamily: 'poppins',
  fontWeight: '600',
  textTransform: 'capitalize',
  padding: '0.5rem',
  color: 'blue',
  letterSpacing: '0.5px',
  margin: '0 0.1rem',
  '&:hover': {
    color: '#fff',
  },
}));

export const TopBarHeading = styled(Typography)(() => ({
  color: '#fff',
  fontSize: '0.7rem',
  fontFamily: 'poppins',
  fontWeight: '400',
  letterSpacing: '0.5px',
}));

//MAIN BAR
export const MainBarWrap = styled(Box)(() => ({
  height: '55px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 1.5rem',
  borderBottom: '1px solid #d3d3d3',
}));

export const DesktopNavWrap = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '1rem',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

export const MainBarNavItem = styled(Typography)(() => ({
  fontFamily: 'poppins',
  fontSize: '1rem',
  fontWeight: '400',
  textTransform: 'capitalize',
  '&:hover': {
    color: 'blue',
  },
}));
//MOBILE MENU
export const MobileMenuWrap = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'flex',
  },
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));
export const MobileMenuBox = styled(Box)(() => ({
  width: '50vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));
export const MobileNavWrap = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
}));
