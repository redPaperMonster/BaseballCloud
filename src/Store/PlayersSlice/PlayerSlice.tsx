import { createSlice } from "@reduxjs/toolkit";
import { transformData } from "../../Utils";

const initialState = [{}];

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setData: (state, action) => {
      action.payload.map((i: any) => {
        state.push(i);
      });
      transformData(state);
      return state;
    },
    resetStore: (state) => {
      state = initialState;
      return state;
    },
  },
});

export const playerActions = playerSlice.actions;

export default playerSlice.reducer;
