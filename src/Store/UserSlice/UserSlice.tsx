import { createSlice } from "@reduxjs/toolkit";
import { mapValues } from "lodash";

const initialState = {
  token: "",
  id: "",
  first_name: "",
  last_name: "",
  avatar: "",
  position: "",
  position2: "",
  throws_hand: "",
  bats_hand: "",
  biography: "",
  school_year: "",
  feet: "",
  inches: "",
  weight: "",
  age: "",
};
const decorateText = (text: string) => {
  return text
    .replace("_", " ")
    .toLowerCase()
    .split(" ")
    .map((word: string) => word[0].toUpperCase() + word.substr(1))
    .join(" ");
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setData: (state, action) => {
      const newState = mapValues(action.payload, (i) => {
        return i !== action.payload.avatar &&
          i !== action.payload.biography &&
          typeof i === "string"
          ? decorateText(i)
          : i;
      });
      state = { ...state, ...newState };
      return state;
    },
    resetStore: (state) => {
      // state.avatarURL = "";
      // state.firstName = "";
      // state.lastName = "";
      state = initialState;
      return state;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
