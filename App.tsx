
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux'

import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
import CategoryScreen from './src/screens/CategoryScreen/CategoryScreen';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import ProductDetailsScreen from './src/screens/ProductDetailScreen/ProductDetailsScreen';
import ProductsScreen from './src/screens/ProductsScreen/ProductsScreen';
import WishListScreen from './src/screens/WishListScreen/WishListScreen';
import { store } from './store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>

        <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Category" component={CategoryScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
          <Stack.Screen name="Products" component={ProductsScreen} />
          <Stack.Screen name="WishList" component={WishListScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
