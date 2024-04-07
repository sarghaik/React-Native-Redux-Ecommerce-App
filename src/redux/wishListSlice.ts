import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import { getStorageData, storeData } from '../services/StorageService';

export const getStorageWishList = createAsyncThunk('wishList/getStorageWishList', async () => {
  return await getStorageData('wishList');
})

export const updateWishList = createAsyncThunk('wishList/updateWishList', async (wl:string[]) => {
  return await storeData('wishList', wl);
})

const wishListSlice = createSlice({
  name: 'wishList',
  initialState: [] as string [],
  reducers: {
    // wishListAdded(state, action) {
    //   state.push(action.payload)
    // },
    // wishListRemoved(state, action) {
    //   const index = state.indexOf(action.payload);
    //   if (index > -1) { 
    //     state.splice(index, 1);
    //   }
    // }
  },
  extraReducers(builder) {
    builder.addCase(getStorageWishList.fulfilled, (state, action) => {
      return action.payload
    }),
    builder.addCase(updateWishList.fulfilled, (state, action) => {
      return action.payload
    })
  }
})

export const selectWishList = (state: RootState) => state?.wishList

// export const { wishListAdded, wishListRemoved } = wishListSlice.actions
export default wishListSlice.reducer