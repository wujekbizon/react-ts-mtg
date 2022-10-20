import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './homeSlice';
import cardsReducer from './cardsSlice';

export const store = configureStore({
  reducer: {
    home: homeReducer,
    cards: cardsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
