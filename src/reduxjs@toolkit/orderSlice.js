import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as mongodAPI from '../lib/api/mongod';

const asyncGetDailyOrder = createAsyncThunk(
  'orderSlice/asyncGetDailyOrder',
  async (body, { rejectWithValue }) => {
    try {
      const res = await mongodAPI.getDailyOrder(body);
      return res.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  },
);

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    results: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(asyncGetDailyOrder.pending, (state, action) => {});
    builder.addCase(asyncGetDailyOrder.fulfilled, (state, action) => {
      state.results = action.payload.results;
    });
    builder.addCase(asyncGetDailyOrder.rejected, (state, action) => {});
  },
});

export default orderSlice.reducer;
export { asyncGetDailyOrder };
