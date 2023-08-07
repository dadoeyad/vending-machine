import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { ProductProps } from '../components/Products';

export interface productsState {
    data: ProductProps[];
}

const initialState: productsState = {
    data: []
}


export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductProps[] | null>) => {
        if (action.payload != null)
            state.data = action.payload
    },
  }
})


export const { setProducts } = productsSlice.actions

export default productsSlice.reducer