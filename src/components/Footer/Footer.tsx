import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ICategoryProps, IHomeProps, IProfileProps, IWishListProps } from '../../../types';

export default function Footer({ navigation, route }: IHomeProps | ICategoryProps | IWishListProps | IProfileProps) {

  console.log(route);
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', height: 50 }}>
      <TouchableOpacity onPress={() => { navigation.navigate('Home') }
      }>
        <Text style={route.name === 'Home' ? ({ color: 'blue' }) : null}>Home</Text></TouchableOpacity>
      <TouchableOpacity onPress={() =>
        navigation.navigate('Category')
      }>
        <Text style={route.name === 'Category' ? ({ color: 'blue' }) : null}>Categories</Text></TouchableOpacity>
      <TouchableOpacity onPress={() =>
        navigation.navigate('WishList')
      }>
        <Text style={route.name === 'WishList' ? ({ color: 'blue' }) : null}>Wishlist</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() =>
        navigation.navigate('Profile')
      }>
        <Text style={route.name === 'Profile' ? ({ color: 'blue' }) : null}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

