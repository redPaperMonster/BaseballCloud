import { createSlice, current } from "@reduxjs/toolkit";

const initialState: any[] = [];

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setData: (state, action) => {
      action.payload.map((i: any) => {
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
      state.map((i: any) => {
        if (i.id === action.payload.id) {
          i.favorite = action.payload.favorite;
        }
        return i;
      });
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
