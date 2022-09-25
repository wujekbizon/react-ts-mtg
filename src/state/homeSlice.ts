import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

interface HomeState {
  manaSymbol: string;
  isOpenTribes: boolean;
  isOpenAbilities: boolean;
  isActiveLand: boolean;
}

const initialState: HomeState = {
  manaSymbol: '',
  isOpenTribes: false,
  isOpenAbilities: false,
  isActiveLand: false,
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
      state.isActiveLand = true;
    },
    activateLand: (state) => {
      state.isActiveLand = true;
    },
    deactivateLand: (state) => {
      state.isActiveLand = false;
    },
  },
});

export const {
  openModalAbilities,
  closeModalAbilities,
  openModalTribes,
  closeModalTribes,
  setManaSymbol,
  activateLand,
  deactivateLand,
} = homeSlice.actions;
export default homeSlice.reducer;
