import { configureStore } from '@reduxjs/toolkit';
import globalSlice from './globalSlice';
import scanSlice from './scanSlice';

export const store = configureStore({
  reducer: {
    global: globalSlice,
    scan: scanSlice,
  },
});
