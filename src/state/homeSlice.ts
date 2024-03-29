import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface HomeState {
  manaSymbol: string;
  isOpenTribes: boolean;
  isOpenAbilities: boolean;
  searchQuery: string;
}

const initialState: HomeState = {
  manaSymbol: 'colorless',
  isOpenTribes: false,
  isOpenAbilities: false,
  searchQuery: '',
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    openModalTribes: (state) => {
      state.isOpenTribes = true;
    },
    closeModalTribes: (state) => {
      state.isOpenTribes = false;
    },
    openModalAbilities: (state) => {
      state.isOpenAbilities = true;
    },
    closeModalAbilities: (state) => {
      state.isOpenAbilities = false;
    },
    setManaSymbol: (state, { payload }: PayloadAction<string>) => {
      state.manaSymbol = payload;
    },
    setSearchQuery: (state, { payload }: PayloadAction<string>) => {
      state.searchQuery = payload;
    },
  },
});

export const {
  openModalAbilities,
  closeModalAbilities,
  openModalTribes,
  closeModalTribes,
  setManaSymbol,
  setSearchQuery,
} = homeSlice.actions;
export default homeSlice.reducer;
