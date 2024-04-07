import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './src/redux/categorySlice'
import productSlice from './src/redux/productSlice'
import wishListSlice from './src/redux/wishListSlice'

export const store = configureStore({
  reducer: {
    categories: categorySlice,
    products: productSlice,
    wishList: wishListSlice
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch