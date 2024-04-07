import { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ImageSourcePropType, ScrollView } from 'react-native';
import { useSelector } from 'react-redux'
import { store } from '../../../store';
import { getCategories, selectAllCategories } from '../../redux/categorySlice';
import { ICategoryProps } from '../../../types';
import Footer from '../../components/Footer/Footer';

const ImageData = [
  { category: 'automotive', uri: require('../../../assets/categories/automotive.jpg') },
  { category: 'fragrances', uri: require('../../../assets/categories/fragrances.jpg') },
  { category: 'furniture', uri: require('../../../assets/categories/furniture.jpg') },
  { category: 'groceries', uri: require('../../../assets/categories/groceries.jpg') },
  { category: 'home-decoration', uri: require('../../../assets/categories/home-decoration.jpg') },
  { category: 'laptops', uri: require('../../../assets/categories/laptops.jpg') },
  { category: 'lighting', uri: require('../../../assets/categories/lighting.jpg') },
  { category: 'mens-shirts', uri: require('../../../assets/categories/mens-shirts.jpg') },
  { category: 'mens-shoes', uri: require('../../../assets/categories/mens-shoes.jpg') },
  { category: 'mens-watches', uri: require('../../../assets/categories/mens-watches.jpg') },
  { category: 'motorcycle', uri: require('../../../assets/categories/motorcycle.jpg') },
  { category: 'skincare', uri: require('../../../assets/categories/skincare.jpg') },
  { category: 'smartphones', uri: require('../../../assets/categories/smartphones.jpg') },
  { category: 'sunglasses', uri: require('../../../assets/categories/sunglasses.jpg') },
  { category: 'tops', uri: require('../../../assets/categories/tops.jpg') },
  { category: 'womens-bags', uri: require('../../../assets/categories/womens-bags.jpg') },
  { category: 'womens-dresses', uri: require('../../../assets/categories/womens-dresses.jpg') },
  { category: 'womens-jewellery', uri: require('../../../assets/categories/womens-jewellery.jpg') },
  { category: 'womens-shoes', uri: require('../../../assets/categories/womens-shoes.jpg') },
  { category: 'womens-watches', uri: require('../../../assets/categories/womens-watches.jpg') },
]

const getImage = (category: string) => {
  return ImageData.find(item => item.category === category)?.uri;
}

export default function CategoryScreen({ navigation, route }: ICategoryProps) {
  const categories = useSelector(selectAllCategories);

  useEffect(() => {
    if (!categories || !categories?.length) {
      store.dispatch(getCategories());
    }
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        {categories?.length ? categories.map((cat: string, pos: number) => (
          <TouchableOpacity key={pos} style={{ alignItems: 'center' }} onPress={() => {
            navigation.navigate('Products', { category: cat })
          }}>
            <Image source={getImage(cat)}></Image>
            <TouchableOpacity style={{
              marginTop: -40, paddingBottom: 50,
              justifyContent: 'flex-start'
            }}>
              <Text style={{ textTransform: 'uppercase' }}>{cat}</Text>
            </TouchableOpacity>
          </TouchableOpacity>

        )) : null}

      </ScrollView>

      <Footer navigation={navigation} route={route}>
      </Footer>
    </View >
  );
}


