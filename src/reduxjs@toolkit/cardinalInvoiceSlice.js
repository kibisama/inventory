import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import * as mongodAPI from '../lib/api/mongod';
import * as puppetAPI from '../lib/api/puppet';

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
const asyncReviewCardinalInvoice = createAsyncThunk(
  'cardinalInvoiceSlice/asyncReviewCardinalInvoice',
  async (date, { rejectWithValue }) => {
    try {
      const { data } = await mongodAPI.reviewCardinalInvoice(date);
      return data;
    } catch (e) {
      console.log(e);
    }
  },
);
const asyncFindCardinalInvoice = createAsyncThunk(
  'cardinalInvoiceSlice/asyncFindCardinalInvoice',
  async (date, { rejectWithValue }) => {
    try {
      const { data } = await puppetAPI.findCardinalInvoice(date);
      return data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  },
);

const cardinalInvoiceSlice = createSlice({
  name: 'cardinalInvoice',
  initialState: {
    open: false,
    date: dayjs().format('MM-DD-YYYY'),

    isUpdating: false,
    previewData: null,
    resultData: null,
    error: null,
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
      state.resultData = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncGetCardinalInvoice.pending, (state, action) => {
      state.isUpdating = true;
    });
    builder.addCase(asyncGetCardinalInvoice.fulfilled, (state, action) => {
      state.previewData = action.payload;
      state.isUpdating = false;
    });
    builder.addCase(asyncGetCardinalInvoice.rejected, (state, action) => {
      state.previewData = null;
      state.isUpdating = false;
    });
    builder.addCase(asyncReviewCardinalInvoice.pending, (state, action) => {
      state.isUpdating = true;
    });
    builder.addCase(asyncReviewCardinalInvoice.fulfilled, (state, action) => {
      state.resultData = action.payload;
      state.isUpdating = false;
    });
    builder.addCase(asyncReviewCardinalInvoice.rejected, (state, action) => {
      state.resultData = null;
      state.isUpdating = false;
    });
    builder.addCase(asyncFindCardinalInvoice.pending, (state, action) => {
      state.isUpdating = true;
    });
    builder.addCase(asyncFindCardinalInvoice.fulfilled, (state, action) => {
      if (action.payload.error) {
        state.previewData = null;
        state.error = action.payload.error;
      } else {
        state.previewData = action.payload;
      }
      state.isUpdating = false;
    });
    builder.addCase(asyncFindCardinalInvoice.rejected, (state, action) => {
      state.error = 500;
      state.isUpdating = false;
    });
  },
});

export default cardinalInvoiceSlice.reducer;
export const { setOpen, setDate, setResultData, setError } =
  cardinalInvoiceSlice.actions;
export {
  asyncGetCardinalInvoice,
  asyncReviewCardinalInvoice,
  asyncFindCardinalInvoice,
};
