import { View } from 'react-native';
import { IProps, IItemProps } from './types';
import DoubleListItem from './DoubleListItem';
import { IProduct } from '../../../types';


export default function DoubleList({ data, maxRow, navigation }: IProps) {

  const evenData: IProduct[] = [], oddData: IProduct[] = [];
  Array.isArray(data) && data.forEach((el, pos) => {
    if (maxRow && 2 * maxRow <= pos) return;
    if (pos % 2) oddData.push(el);
    else evenData.push(el);
  });

  const onPress = (elem: IProduct) => navigation?.navigate('ProductDetails', { id: elem.id })

  return (
    <View>
      {evenData.map((elem, pos) => (
        <View key={pos} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
          <DoubleListItem item={elem} onPress={() => onPress(elem)}></DoubleListItem>
          {oddData?.[pos] && <DoubleListItem item={oddData[pos]} onPress={() => onPress(oddData[pos])}></DoubleListItem>}

        </View>))}
    </View>
  );
}

