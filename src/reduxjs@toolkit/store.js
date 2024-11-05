import { configureStore } from '@reduxjs/toolkit';
import globalSlice from './globalSlice';
import scanSlice from './scanSlice';
import treeSlice from './treeSlice';
import cardinalInvoiceSlice from './cardinalInvoiceSlice';

export const store = configureStore({
  reducer: {
    global: globalSlice,
    tree: treeSlice,
    scan: scanSlice,
    cardinalInvoice: cardinalInvoiceSlice,
  },
});
