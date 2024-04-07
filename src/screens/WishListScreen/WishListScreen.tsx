import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux'
import DoubleList from '../../components/DoubleList/DoubleList';
import Footer from '../../components/Footer/Footer';

import { getProducts, selectAllProducts } from '../../redux/productSlice';
import { useEffect } from 'react';
import { store } from '../../../store';
import { IProduct, IWishListProps } from '../../../types';
import { getCategories, selectAllCategories } from '../../redux/categorySlice';
import { selectWishList } from '../../redux/wishListSlice';



export default function WishListScreen({ navigation, route }: IWishListProps) {
  const products = useSelector(selectAllProducts);
  const wishList = useSelector(selectWishList);

  useEffect(() => {
    if (!products || !products?.length) {
      store.dispatch(getProducts());
    }
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <DoubleList data={products.filter((prod: IProduct) => wishList.find(w => prod.id.toString() === w))}
          navigation={navigation}>

        </DoubleList>

      </ScrollView>

      <Footer navigation={navigation} route={route}>
      </Footer>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryText: {
    fontSize: 16,
    fontWeight: '600',
    paddingLeft: 16,
    textTransform: 'uppercase'
  },
  linkText: {
    fontSize: 14,
    color: '#4169e1',
    paddingRight: 16,
    textTransform: 'uppercase'
  },
});


