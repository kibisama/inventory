import { configureStore } from '@reduxjs/toolkit';
import globalSlice from './globalSlice';
import scanSlice from './scanSlice';
import searchSlice from './searchSlice';

export const store = configureStore({
  reducer: {
    global: globalSlice,
    scan: scanSlice,
    search: searchSlice,
  },
});
