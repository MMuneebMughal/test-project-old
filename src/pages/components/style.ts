import { styled, Paper, Typography, Button } from '@mui/material';
//HEADER TEMPLATE
export const Item = styled(Paper)(() => ({
  height: '100%',
  overflow: 'clip',
  borderRadius: '7px',
}));
export const RightTop = styled(Paper)(() => ({
  height: '250px',
  overflow: 'clip',
  borderRadius: '7px',
  marginBottom: '16px',
}));
export const Rightbottom = styled(Paper)(() => ({
  height: '100%',
  overflow: 'clip',
  borderRadius: '7px',
}));
//PRODUCTS DETAILS
export const ProductTitle = styled(Typography)(() => ({
  fontFamily: 'montserrat',
  fontSize: '1.4rem',
  fontWeight: '600',
  color: '#333',
  margin: '0.5rem 0',
  textTransform: 'capitalize',
}));
export const ProductCategory = styled(Typography)(() => ({
  fontFamily: 'poppins',
  fontSize: '0.8rem',
  fontWeight: '600',
  color: '#55B84B',
  textTransform: 'capitalize',
}));

export const ProductDiscount = styled(Typography)(() => ({
  width: '80px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#D01345',
  color: '#E1E2E0',
  fontFamily: 'montserrat',
  fontSize: '0.6rem',
  fontWeight: '700',
  lineHeight: 0,
  padding: '0.7rem 0rem',
  borderRadius: '35px',
}));
export const ProductPrice = styled(Typography)(() => ({
  display: 'flex',
  alignItems: 'center',
  fontFamily: 'poppins',
  fontSize: '1.5rem',
  fontWeight: '700',
  color: '#333',
  textTransform: 'uppercase',
}));
export const FinalPrice = styled(Typography)(() => ({
  fontFamily: 'poppins',
  fontSize: '1.5rem',
  fontWeight: '700',
  color: '#D01345',
  marginLeft: '0.5rem',
  textTransform: 'uppercase',
}));
export const ProductDescription = styled(Typography)(() => ({
  fontFamily: 'poppins',
  fontSize: '0.9rem',
  fontWeight: '400',
  margin: '1rem 0',
}));
export const ProductAction = styled(Button)(() => ({
  fontFamily: 'poppins',
  fontSize: '0.9rem',
  fontWeight: '600',
  color: '#333',
  textTransform: 'uppercase',
  '&:hover': {
    color: '#55B84B',
  },
}));
