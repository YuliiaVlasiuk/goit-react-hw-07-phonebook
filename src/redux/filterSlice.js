import { createSlice } from "@reduxjs/toolkit";


const filtersSlice = createSlice({
  name: "filters",
  initialState: {
      value: '',
  },
  reducers: {
    checkFilter(state, action) {
      state.value = action.payload;
    },
  },
});

export const { checkFilter } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;