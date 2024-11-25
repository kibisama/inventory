import { createSlice } from '@reduxjs/toolkit';

const globalSlice = createSlice({
  name: 'global',
  initialState: {
    mainView: 'inventories',
    darkMode: true,
  },
  reducers: {
    setMainView: (state, action) => {
      state.mainView = action.payload;
    },
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});

export default globalSlice.reducer;
export const { setMainView, setDarkMode } = globalSlice.actions;
