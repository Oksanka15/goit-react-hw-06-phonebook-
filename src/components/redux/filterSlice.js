import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: { filter: "" },
  reducers: {
    changeFilter(state, action) {
     state = action.payload;
     return state;
    }
  },
});

export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;