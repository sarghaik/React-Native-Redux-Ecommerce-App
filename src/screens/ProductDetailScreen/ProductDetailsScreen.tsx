import { View, Text, ScrollView, TouchableOpacity, StyleSheet, TextInput, Button, ImageSourcePropType } from 'react-native';
import { useSelector } from 'react-redux'
import { ImageSlider } from "react-native-image-slider-banner";

import { getProducts, selectAllProducts } from '../../redux/productSlice';
import { useEffect, useState } from 'react';
import { store } from '../../../store';
import { IProduct, IProductDetailsProps } from '../../../types';
import { WISHLIST_LABELS, wishListToggle } from '../../components/DoubleList/DoubleListItem';
import { getStorageWishList, selectWishList } from '../../redux/wishListSlice';

const calculateNewPrice = (price?: number, discoutPercent?: number) => {
  if (!price || !discoutPercent) return null;
  return Math.round(price * (100 - discoutPercent)) / 100;
}


export default function ProductDetailsScreen({ navigation, route }: IProductDetailsProps) {
  const { id } = route.params;
  const products = useSelector(selectAllProducts);
  const wishList = useSelector(selectWishList);
  const [currentProduct, setCurrentProduct] = useState({} as IProduct)

  useEffect(() => {
    if (!products || !products?.length) {
      store.dispatch(getProducts());
    }
    else {
      const _product = products.find(prod => prod.id === id);
      _product && setCurrentProduct(_product);
    }
  }, [products])

  useEffect(() => {
    store.dispatch(getStorageWishList())
  }, [])


  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        {currentProduct?.images ? <ImageSlider
          data={currentProduct?.images.map((image: string) => ({ img: image }))}
        /> : null}


        <View style={{ padding: 16 }}>
          {currentProduct ? <TouchableOpacity onPress={() => wishListToggle(currentProduct?.id.toString(), wishList)}>
            <Text style={{ color: wishList.find(w => w === currentProduct?.id?.toString()) ? 'red' : 'blue' }}>
              {wishList.find(w => w === currentProduct?.id?.toString()) ? WISHLIST_LABELS.saved : WISHLIST_LABELS.addToSaved}
            </Text>
          </TouchableOpacity> : null}

          <View style={styles.rowStyle}>
            <Text style={{ fontSize: 16, fontWeight: '600' }}>
              {currentProduct?.title}
            </Text>
          </View>
          <View style={{ ...styles.rowStyle, flexDirection: 'row' }}>
            <Text style={{ textDecorationLine: 'line-through' }}>
              {`$${currentProduct?.price}`}
            </Text>
            <Text style={{ color: 'red' }}>
              {`  $${calculateNewPrice(currentProduct?.price, currentProduct?.discountPercentage)}`}
            </Text>
          </View>
          <View style={styles.rowStyle}>
            <Text>
              {`Rating: ${currentProduct?.rating}`}
            </Text>
          </View>
          <View style={styles.rowStyle}>
            <Text>
              {`ID: ${currentProduct?.id}`}
            </Text>
          </View>
          <View style={styles.rowStyle}>
            <Text>
              {`Brand: ${currentProduct?.brand}`}
            </Text>
          </View>
          <View style={styles.rowStyle}>
            <Text>
              {`Category: ${currentProduct?.category}`}
            </Text>
          </View>
          <View style={styles.rowStyle}>
            <Text>
              Description:
            </Text>
            <Text>
              {currentProduct?.description}
            </Text>
          </View>
          <View style={styles.rowStyle}>
            <Button title='Add to Card'>

            </Button>

          </View>
        </View>
      </ScrollView>

    </View>
  );
}


export const styles = StyleSheet.create({
  rowStyle: {
    paddingTop: 10,
    fontSize: 14,
    fontWeight: '400',
    textTransform: 'uppercase'
  },
});


