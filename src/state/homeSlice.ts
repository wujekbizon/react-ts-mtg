import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

interface HomeState {
  isOpenTribes: boolean;
  isOpenAbilities: boolean;
}

const initialState: HomeState = {
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
  },
});

export const {
  openModalAbilities,
  closeModalAbilities,
  openModalTribes,
  closeModalTribes,
} = homeSlice.actions;
export default homeSlice.reducer;
