import AsyncStorage from '@react-native-async-storage/async-storage';
import { IProduct } from '../../types';

export const storeData = async (key: string, value: string[]) => {
  try {
    await AsyncStorage.setItem(key, value.toString());
    return value;
  } catch (e) {
    console.error(e)
  }
};

export const getStorageData = async (key: string) => {
  try {
    const data = await AsyncStorage.getItem(key);
    if(data) return data.split(',');
    else return;
    
  } catch (e) {
    console.error(e)
  }
};