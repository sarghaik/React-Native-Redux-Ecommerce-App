import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { ImageSlider } from "react-native-image-slider-banner";
import DoubleList from '../../components/DoubleList/DoubleList';
import Footer from '../../components/Footer/Footer';


import { getProducts, selectAllProducts } from '../../redux/productSlice';
import { useEffect } from 'react';
import { store } from '../../../store';
import { IProduct, IHomeProps } from '../../../types';
import { getCategories, selectAllCategories } from '../../redux/categorySlice';
import { getStorageWishList, selectWishList } from '../../redux/wishListSlice';



export default function HomeScreen({ navigation, route }: IHomeProps) {
  const products = useSelector(selectAllProducts);
  const categories = useSelector(selectAllCategories);
  const wishList = useSelector(selectWishList);

  useEffect(() => {
    if (!products || !products?.length) {
      store.dispatch(getProducts());
    }
    if (!categories || !categories?.length) {
      store.dispatch(getCategories());
    }
    store.dispatch(getStorageWishList())
  }, [])


  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <ImageSlider
          data={[
            { img: require('../../../assets/banner/banner1.jpg') },
            { img: require('../../../assets/banner/banner2.jpg') },
            { img: require('../../../assets/banner/banner3.jpg') }]}
          localImg
        />


        {categories?.length ? categories.map((cat: string, pos: number) => (
          <View key={pos}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 40 }}>
              <Text style={styles.categoryText}>{cat}</Text>
              <TouchableOpacity onPress={() =>
                navigation.navigate('Products', { category: cat })
              }>
                <Text style={styles.linkText}>see all</Text>
              </TouchableOpacity>
            </View>
            <DoubleList data={products.filter((prod: IProduct) => prod.category === cat)} maxRow={2}
              navigation={navigation}>

            </DoubleList>
          </View>

        )) : null}

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


