import { View, Text, ScrollView, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useSelector } from 'react-redux'
import DoubleList from '../../components/DoubleList/DoubleList';

import { getProducts, selectAllProducts } from '../../redux/productSlice';
import { useEffect, useState } from 'react';
import { store } from '../../../store';
import { IProduct, IProductsProps } from '../../../types';
import { fetchProductsByCategory } from '../../services/FetchService';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function ProductsScreen({ navigation, route }: IProductsProps) {
  const { category } = route.params;
  const products = useSelector(selectAllProducts);
  const [categoryProducts, setCategoryProducts] = useState([] as IProduct[])
  const [inputCategory, setInputCategory] = useState('');

  useEffect(() => {
    if (!products || !products?.length) {
      store.dispatch(getProducts());
    }
    fetchProductsByCategory(category).then(data => setCategoryProducts(data));
  }, [])


  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <SafeAreaView>
          <TextInput style={{
            height: 40,
            margin: 20,
            borderWidth: 1,
            padding: 10,
          }} value={inputCategory} onChangeText={setInputCategory}></TextInput>
        </SafeAreaView>
        <DoubleList data={!inputCategory ? categoryProducts :
          products.filter(prod => prod.title.includes(inputCategory))} navigation={navigation}>
        </DoubleList>
      </ScrollView>

    </View>
  );
}


