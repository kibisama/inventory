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
    mode: null,
    dateIn: dayjs().format(),
    origin: 0,
    isUpdating: false,
    isUpdated: false,
    error: null,
  },
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },
    setDateIn: (state, action) => {
      state.addDate = action.payload;
    },
    setOrigin: (state, action) => {
      state.origin = action.payload;
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
export const { setMode, setDateIn, setOrigin } = scanSlice.actions;
export { asyncInvScan };
