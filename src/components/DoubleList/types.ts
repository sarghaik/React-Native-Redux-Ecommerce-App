import { IHomeProps, IProduct } from '../../../types';

export type IProps = {
  data: IProduct[];
  maxRow?: number; 
  navigation?: any;
}

export type IItemProps = {
  item: IProduct;
  onPress?: Function;
}