import { createSlice } from '@reduxjs/toolkit';

const globalSlice = createSlice({
  name: 'global',
  initialState: {
    darkMode: false,
    offLineMode: false,
  },
  reducers: {
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
    setOffLineMode: (state, action) => {
      state.offLineMode = action.payload;
    },
  },
});

export default globalSlice.reducer;
export const { setDarkMode, setOffLineMode } = globalSlice.actions;
