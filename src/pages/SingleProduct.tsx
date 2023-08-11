import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '@src/utils/axios/fetchData';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import {
  Box,
  Grid,
  CardMedia,
  CardContent,
  CardActionArea,
  CardActions,
  Checkbox,
  // styled,
} from '@mui/material';
import {
  Title,
  Price,
  Category,
  Description,
  DiscountBaner,
  Stock,
  Action,
} from '@src/pages/components/productdetails';
import { StarRating } from '@src/pages/components/StarRating';

export const SingleProduct = () => {
  const { productId } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [product, setProduct] = useState<any | null>({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const response = await fetchData({ url: `products/${productId}` });
        setProduct(response);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        setError(error);
      }
    };
    fetchDataFromApi();
  }, [productId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  const {
    title,
    category,
    thumbnail,
    description,
    stock,
    price,
    discountPercentage,
  } = product;
  const discountedPrice = price - discountPercentage;
  // const StockDetails = styled(Typography)(() => ({}));
  return (
    <Box sx={{ width: '100%', padding: '1rem 1.5rem' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <CardMedia
            component='img'
            height='500px'
            image={thumbnail}
            alt='Product'
          />
        </Grid>
        <Grid item xs={6}>
          <CardActionArea>
            <CardContent>
              <DiscountBaner discountPercentage={discountPercentage} />
              <Title title={title} />
              <Category category={category} />
              <Price
                discountPercentage={discountPercentage}
                price={price}
                discountedPrice={discountedPrice}
              />
              <StarRating />
              <Description description={description} />
              <Stock stock={stock} />
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                inputProps={{ 'aria-label': 'Favorite' }}
              />
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                inputProps={{ 'aria-label': 'Favorite' }}
              />
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                inputProps={{ 'aria-label': 'Favorite' }}
              />
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Action action='Wishlist' />
            <Action action='Cart' />
            <Action action='Share' />
          </CardActions>
          <CardActions>
            <Action action='Review' />
          </CardActions>
        </Grid>
      </Grid>
    </Box>
  );
};
