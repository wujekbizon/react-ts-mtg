import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

interface HomeState {
  manaSymbol: string;
  isOpenTribes: boolean;
  isOpenAbilities: boolean;
}

const initialState: HomeState = {
  manaSymbol: '',
  isOpenTribes: false,
  isOpenAbilities: false,
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
    setManaSymbol: (state, action: PayloadAction<string>) => {
      state.manaSymbol = action.payload;
    },
  },
});

export const {
  openModalAbilities,
  closeModalAbilities,
  openModalTribes,
  closeModalTribes,
  setManaSymbol,
} = homeSlice.actions;
export default homeSlice.reducer;
