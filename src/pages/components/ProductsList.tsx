import { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from '@mui/material';
import { VisibilitySharp } from '@mui/icons-material';
import {
  ProductCategory,
  ProductTitle,
  ProductPrice,
  ProductAction,
} from '@src/pages/components/style';
import { Link } from 'react-router-dom';
import { fetchData } from '@src/utils/axios/fetchData';
import { Action } from '@src/pages/components/productdetails';

export const ProductsList = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetchData();
        setData(response.products);
      } catch (error) {
        setError((error as Error).message);
      }
    };
    fetchProducts();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  } else if (!data || !Array.isArray(data) || data.length === 0) {
    return <div>Loading...</div>;
  }
  // const {id,title,category,price,thumbnail} = product
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={12}>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {data.map((product: any) => (
          <Grid item xs={4} key={product.id}>
            <Card sx={{ maxWidth: '100%', boxShadow: 'none' }}>
              <CardMedia
                component='img'
                alt='green iguana'
                height='550px'
                image={product.thumbnail}
              />
              <CardContent>
                <ProductCategory>{product.category}</ProductCategory>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductPrice>RS {product.price}/-</ProductPrice>
              </CardContent>
              <CardActions>
                <Action action='Wishlist' />
                <Action action='Cart' />
                <ProductAction
                  component={Link}
                  to={`/shop/product/${product.id}`}
                  size='small'
                  startIcon={<VisibilitySharp />}
                >
                  View
                </ProductAction>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
