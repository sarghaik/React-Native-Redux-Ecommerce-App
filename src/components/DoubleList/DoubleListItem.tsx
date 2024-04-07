import { View, Text, StyleSheet, Image, Touchable, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux'
import { IItemProps } from './types';
import { store } from '../../../store';
import { selectWishList, updateWishList } from '../../redux/wishListSlice';
import { useEffect } from 'react';

export const WISHLIST_LABELS = {
  addToSaved: 'Add to saved',
  saved: 'Saved'
}

export const wishListToggle = (id: string, wishList: string[]) => {
  if (wishList.find(w => w === id))
    store.dispatch(updateWishList(wishList.filter(w => w !== id)))
  else store.dispatch(updateWishList([...wishList, id]));
}

export default function DoubleListItem({ item, onPress }: IItemProps) {

  const wishList = useSelector(selectWishList);



  return (
    <View style={styles.itemStyle} >
      <TouchableOpacity onPress={() => onPress && onPress()}>
        <Image style={styles.thumbStyle} source={{ uri: item.thumbnail }} />
      </TouchableOpacity>
      <Text>
        {item.title}
      </Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text>
          {`Rating: ${item.rating}`}
        </Text>
        <Text>
          {`$ ${item.price}`}
        </Text>
      </View>
      <TouchableOpacity onPress={() => wishListToggle(item.id.toString(), wishList)}>
        <Text style={{ color: wishList.find(w => w === item.id.toString()) ? 'red' : 'blue' }}>
          {wishList.find(w => w === item.id.toString()) ? WISHLIST_LABELS.saved : WISHLIST_LABELS.addToSaved}
        </Text>
      </TouchableOpacity>
    </View >
  );
}

const styles = StyleSheet.create({
  itemStyle: {
    paddingTop: 10,
    fontWeight: '600',
    textTransform: 'uppercase',
    width: 150

  },
  thumbStyle: {
    height: 150,
    width: 150
  }
});

