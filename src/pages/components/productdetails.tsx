import {
  ShareSharp,
  ShoppingBasketSharp,
  FavoriteBorderSharp,
  VisibilitySharp,
  HistoryEduSharp,
} from '@mui/icons-material';
import {
  ProductTitle,
  ProductCategory,
  ProductPrice,
  ProductDiscount,
  FinalPrice,
  ProductDescription,
  ProductAction,
} from '@src/pages/components/style';
interface TitleProps {
  title: string;
}
interface CategoryProps {
  category: string;
}
interface DescriptioProps {
  description: string;
}
interface DiscountBannerProps {
  discountPercentage: number;
}

interface PriceProps {
  price: number;
  discountedPrice: number;
  discountPercentage: number;
}

interface StockProps {
  stock: number;
}

interface ActionProps {
  action: string;
}

export const Title = ({ title }: TitleProps) => {
  return <ProductTitle>{title}</ProductTitle>;
};
export const Category = ({ category }: CategoryProps) => {
  return <ProductCategory>{category}</ProductCategory>;
};
export const Description = ({ description }: DescriptioProps) => {
  return <ProductDescription>{description}</ProductDescription>;
};
export const DiscountBaner = ({ discountPercentage }: DiscountBannerProps) => {
  return discountPercentage > 0 ? (
    <ProductDiscount>{discountPercentage} % OFF</ProductDiscount>
  ) : null;
};
export const Price = ({
  discountPercentage,
  price,
  discountedPrice,
}: PriceProps) => {
  return discountPercentage > 0 ? (
    <ProductPrice>
      <s>RS {price}</s>
      <FinalPrice>RS {discountedPrice} /-</FinalPrice>
    </ProductPrice>
  ) : (
    <ProductPrice>RS {price} /-</ProductPrice>
  );
};
export const Stock = ({ stock }: StockProps) => {
  return stock > 0 ? (
    <ProductDescription>In Stock {stock}</ProductDescription>
  ) : (
    <ProductDescription>Out Of Stock</ProductDescription>
  );
};
export const Action = ({ action }: ActionProps) => {
  return action === 'Wishlist' ? (
    <ProductAction size='small' startIcon={<FavoriteBorderSharp />}>
      Add To Wishlist
    </ProductAction>
  ) : action === 'Cart' ? (
    <ProductAction size='small' startIcon={<ShoppingBasketSharp />}>
      Add To Cart
    </ProductAction>
  ) : action === 'Share' ? (
    <ProductAction size='small' startIcon={<ShareSharp />}>
      Share
    </ProductAction>
  ) : action === 'View' ? (
    <ProductAction size='small' startIcon={<VisibilitySharp />}>
      View
    </ProductAction>
  ) : action === 'Review' ? (
    <ProductAction size='small' startIcon={<HistoryEduSharp />}>
      WRITE A REVIEW
    </ProductAction>
  ) : null;
};
