import { createSlice } from "@reduxjs/toolkit";
import { mapValues } from "lodash";
import { transformData } from "../../Utils";

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
  feet: 0,
  inches: 0,
  weight: 0,
  age: 0,
  school: { id: "", name: "" },
  teams: [],
  facilities: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setData: (state, action) => {
      const newState = transformData(action.payload);
      state = { ...state, ...newState };
      return state;
    },
    resetStore: (state) => {
      state = initialState;
      return state;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
