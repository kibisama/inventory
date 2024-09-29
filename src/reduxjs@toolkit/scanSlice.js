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
    origin: 'Cardinal',
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
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    initIsUpdated: (state) => {
      state.isUpdated = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncInvScan.pending, (state, action) => {
      state.isUpdating = true;
    });
    builder.addCase(asyncInvScan.fulfilled, (state, action) => {
      state.isUpdating = false;
      state.isUpdated = true;
    });
    builder.addCase(asyncInvScan.rejected, (state, action) => {
      state.error = action.payload;
      console.log(state.error);
      state.isUpdating = false;
    });
  },
});

export default scanSlice.reducer;
export const { setOpen, setMode, setInputDate, setOrigin, initIsUpdated } =
  scanSlice.actions;
export { asyncInvScan };
