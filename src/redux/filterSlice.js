import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = '';

const filtersSlice = createSlice({
  name: 'filter',
  initialState: filtersInitialState,
  reducers: {
    contactsFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { contactsFilter } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
