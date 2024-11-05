import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import * as mongodAPI from '../lib/api/mongod';

const asyncGetCardinalInvoice = createAsyncThunk(
  'cardinalInvoiceSlice/asyncGetCardinalInvoice',
  async (date, { rejectWithValue }) => {
    try {
      const { data } = await mongodAPI.getCardinalInvoice(date);
      return data;
    } catch (e) {
      console.log(e);
    }
  },
);
const asyncPostCardinalInvoice = createAsyncThunk(
  'cardinalInvoiceSlice/asyncPostCardinalInvoice',
  async (date, { rejectWithValue }) => {
    try {
      const { data } = await mongodAPI.postCardinalInvoice(date);
      return data;
    } catch (e) {
      console.log(e);
    }
  },
);

const cardinalInvoiceSlice = createSlice({
  name: 'cardinalInvoice',
  initialState: {
    open: false,
    date: dayjs().format('MM-DD-YYYY'),

    isRequesting: false,
    previewData: null,
    resultData: null,
  },
  reducers: {
    setOpen: (state, action) => {
      if (action.payload != null) {
        state.open = action.payload;
        return;
      }
      state.open = !state.open;
    },
    setDate: (state, action) => {
      state.date = action.payload;
    },
    setResultData: (state, action) => {
      if (action.payload != null) {
        state.open = action.payload;
        return;
      }
      state.resultData = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncGetCardinalInvoice.pending, (state, action) => {
      state.isRequesting = true;
    });
    builder.addCase(asyncGetCardinalInvoice.fulfilled, (state, action) => {
      state.previewData = action.payload;
      state.isRequesting = false;
    });
    builder.addCase(asyncGetCardinalInvoice.rejected, (state, action) => {
      state.previewData = null;
      state.isRequesting = false;
    });
    builder.addCase(asyncPostCardinalInvoice.pending, (state, action) => {
      state.isRequesting = true;
    });
    builder.addCase(asyncPostCardinalInvoice.fulfilled, (state, action) => {
      state.resultData = action.payload;
      state.isRequesting = false;
    });
    builder.addCase(asyncPostCardinalInvoice.rejected, (state, action) => {
      state.resultData = null;
      state.isRequesting = false;
    });
  },
});

export default cardinalInvoiceSlice.reducer;
export const { setOpen, setDate, setResultData } = cardinalInvoiceSlice.actions;
export { asyncGetCardinalInvoice, asyncPostCardinalInvoice };
