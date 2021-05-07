import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  avatarURL: "",
  firstName: "",
  lastName: "",
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setData: (state, action) => {
      state.avatarURL = action.payload.avatar;
      state.firstName = action.payload.first_name;
      state.lastName = action.payload.last_name;
    },
    resetStore: (state) => {
      state.avatarURL = "";
      state.firstName = "";
      state.lastName = "";
      return state;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
