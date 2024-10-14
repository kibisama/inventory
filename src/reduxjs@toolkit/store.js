import { configureStore } from '@reduxjs/toolkit';
import globalSlice from './globalSlice';
import scanSlice from './scanSlice';
import treeSlice from './treeSlice';

export const store = configureStore({
  reducer: {
    global: globalSlice,
    scan: scanSlice,
    tree: treeSlice,
  },
});
