import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as mongodAPI from '../lib/api/mongod';

const asyncGetInv = createAsyncThunk(
  'searchSlice/asyncGetInv',
  async (body, { rejectWithValue }) => {
    try {
      const res = await mongodAPI.getInv();
      return res.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  },
);

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    query: '',
    result: [],
    isUpdating: false,
    isUpdated: false,
    error: null,
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncGetInv.pending, (state, action) => {
      state.isUpdating = true;
    });
    builder.addCase(asyncGetInv.fulfilled, (state, action) => {
      state.isUpdating = false;
      state.result = action.payload;
      state.isUpdated = true;
    });
    builder.addCase(asyncGetInv.rejected, (state, action) => {
      state.error = action.payload;
      console.log(state.error);
      state.isUpdating = false;
    });
  },
});

export default searchSlice.reducer;
export const { setQuery } = searchSlice.actions;
export { asyncGetInv };
