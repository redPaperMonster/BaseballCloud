import { createSelector } from "reselect";
import { RootState } from "../store";

const store = (state: RootState) => state;

export const playerSelector = {
  getPlayersByOffset: (offset: number, perPage: number) =>
    createSelector(store, (state) => {
      let newState = [...state.players];
      newState = newState.slice(offset, newState.length);
      newState = newState.slice(0, perPage);
      return newState;
    }),
  getPlayerById: (id: string) =>
    createSelector(store, (state) =>
      state.players.find((i: any) => i.id === id)
    ),
};
