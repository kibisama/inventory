import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as mongodAPI from '../lib/api/mongod';

const asyncEditInv = createAsyncThunk(
  'treeSlice/asyncEditInv',
  async (body, { rejectWithValue }) => {
    try {
      const res = await mongodAPI.editInv(body);
      return res.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  },
);

const treeSlice = createSlice({
  name: 'tree',
  initialState: {
    registerItems: [],
    expandedItems: [],
    isUpdating: false,
    isUpdated: false,
    error: null,
  },
  reducers: {
    setRegisterItems: (state, action) => {
      state.registerItems = action.payload;
    },
    setExpandedItems: (state, action) => {
      state.expandedItems = action.payload;
    },
    setIsUpdated: (state, action) => {
      state.isUpdated = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncEditInv.pending, (state, action) => {
      state.isUpdating = true;
    });
    builder.addCase(asyncEditInv.fulfilled, (state, action) => {
      state.isUpdating = false;
      state.isUpdated = true;
    });
    builder.addCase(asyncEditInv.rejected, (state, action) => {
      state.error = action.payload;
      console.log(state.error);
      state.isUpdating = false;
    });
  },
});

export default treeSlice.reducer;
export const { setRegisterItems, setExpandedItems, setIsUpdated } =
  treeSlice.actions;
export { asyncEditInv };
