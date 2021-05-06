import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    resetStore: (state) => {
      state.token = "";
      return state;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
