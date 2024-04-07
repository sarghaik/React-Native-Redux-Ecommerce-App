import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { IProduct } from '../../types'
import { fetchProducts } from '../services/FetchService'
import { RootState } from '../../store'

export const getProducts = createAsyncThunk('products/getProducts', async () => {
  return await fetchProducts();
})

const productSlice = createSlice({
  name: 'product',
  initialState: [] as IProduct[],
  reducers: {
    // productAdded(state, action) {
    //   state = [...action.payload]
    // }
  },
  extraReducers(builder) {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      return action.payload
    })
  }
})

export const selectAllProducts = (state: RootState) => state?.products
// export const { productAdded } = productSlice.actions
export default productSlice.reducer