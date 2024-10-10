import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import * as mongodAPI from '../lib/api/mongod';

const asyncInvScan = createAsyncThunk(
  'scanSlice/asyncInvScan',
  async (body, { rejectWithValue }) => {
    try {
      const res = await mongodAPI.invScan(body);
      return res.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  },
);

const scanSlice = createSlice({
  name: 'scan',
  initialState: {
    open: false,
    mode: 'Receive',
    inputDate: dayjs().format(),
    source: 'Cardinal',
    isUpdating: false,
    isUpdated: false,
    error: null,
  },
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    setMode: (state, action) => {
      state.mode = action.payload;
    },
    setInputDate: (state, action) => {
      state.inputDate = action.payload;
    },
    setSource: (state, action) => {
      state.source = action.payload;
    },
    setIsUpdated: (state, action) => {
      state.isUpdated = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncInvScan.pending, (state, action) => {
      state.isUpdated = false;
      state.isUpdating = true;
    });
    builder.addCase(asyncInvScan.fulfilled, (state, action) => {
      state.isUpdating = false;
      state.isUpdated = true;
      if (action.payload.error != null) {
        state.error = action.payload.error;
      } else {
        state.error = null;
      }
    });
    builder.addCase(asyncInvScan.rejected, (state, action) => {
      state.error = 500;
      state.isUpdating = false;
    });
  },
});

export default scanSlice.reducer;
export const {
  setOpen,
  setMode,
  setInputDate,
  setSource,
  setIsUpdated,
  setError,
} = scanSlice.actions;
export { asyncInvScan };
