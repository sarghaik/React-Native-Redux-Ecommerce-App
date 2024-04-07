import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchCategories } from '../services/FetchService';
import { RootState } from '../../store';

export const getCategories = createAsyncThunk('categories/getCategories', async () => {
  return await fetchCategories();
})

const categorySlice = createSlice({
  name: 'category',
  initialState: [] as string[],
  reducers: {
    // categoryAdded(state, action) {
    //   state = [...action.payload]
    // }
  },
  extraReducers(builder) {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      return action.payload
    })
  }
})

export const selectAllCategories = (state: RootState) => state?.categories
// export const { categoryAdded } = categorySlice.actions
export default categorySlice.reducer