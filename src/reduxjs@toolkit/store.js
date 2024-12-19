import { configureStore } from '@reduxjs/toolkit';
import globalSlice from './globalSlice';
import scanSlice from './scanSlice';
import treeSlice from './treeSlice';
import orderSlice from './orderSlice';
import cardinalInvoiceSlice from './cardinalInvoiceSlice';

export const store = configureStore({
  reducer: {
    global: globalSlice,
    tree: treeSlice,
    dailyOrder: orderSlice,
    scan: scanSlice,
    cardinalInvoice: cardinalInvoiceSlice,
  },
});
