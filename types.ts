
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type IProduct = {
  id:string,
  title: string,
  description: string,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number,
  brand: string,
  category: string,
  thumbnail: string,
  images: string [] 
}

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Category: undefined;
  Login: undefined;
  ProductDetails: {id: string};
  Products: {category: string};
  WishList: undefined;
};

export type IHomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type IProfileProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;
export type ILoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;
export type IWishListProps = NativeStackScreenProps<RootStackParamList, 'WishList'>;
export type IProductsProps = NativeStackScreenProps<RootStackParamList, 'Products'>;
export type IProductDetailsProps = NativeStackScreenProps<RootStackParamList, 'ProductDetails'>;
export type ICategoryProps = NativeStackScreenProps<RootStackParamList, 'Category'>;
