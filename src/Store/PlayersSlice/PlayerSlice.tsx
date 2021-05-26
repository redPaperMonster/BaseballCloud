import { createSlice } from "@reduxjs/toolkit";
import { PlayerDataType } from "..";

const initialState: PlayerDataType[] = [];

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setData: (state, action) => {
      action.payload.map((i: PlayerDataType) => {
        if (!state.find((item) => item.id === i.id)) {
          state.push(i);
        }
      });
      return state;
    },
    addPlayer: (state, action) => {
      state.push(action.payload);
      return state;
    },
    updateFavorite: (state, action) => {
      state.map((i: PlayerDataType) => {
        if (i.id === action.payload.id) {
          i.favorite = action.payload.favorite;
        }
        return i;
      });
      return state;
    },
    resetStore: (state) => {
      return initialState;
    },
  },
});

export const playerActions = playerSlice.actions;

export default playerSlice.reducer;
