// 'use client';
import { configureStore } from '@reduxjs/toolkit';
import basketReducer from './basket/basketSlice';
import userReducer from './users/userSlice';
import truckSlice from './truck/truckSlice';

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    user: userReducer,
    truck: truckSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
