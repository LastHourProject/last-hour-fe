import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    userDetails: null,
    isLoading: true,
  },
  reducers: {
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },

    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setUserDetails, setLoading } = userSlice.actions;

export default userSlice.reducer;
