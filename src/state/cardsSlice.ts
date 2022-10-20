import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Data } from '../types/MtgCards';

export interface CardsState {
  dataList: Data;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

const initialState: CardsState = {
  dataList: {
    data: [],
    object: '',
    total_cards: 0,
    has_more: false,
    next_page: '',
  },
  isLoading: false,
  isError: false,
  errorMessage: '',
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    getCardsStart: (state) => {
      state.isLoading = true;
    },
    getCardsSuccess: (state, { payload }: PayloadAction<Data>) => {
      state.isLoading = false;
      state.dataList = payload;
    },
    getCardsFailure: (state, { payload }: PayloadAction<string>) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = payload;
    },
  },
});

export const { getCardsStart, getCardsFailure, getCardsSuccess } =
  cardsSlice.actions;

export default cardsSlice.reducer;
