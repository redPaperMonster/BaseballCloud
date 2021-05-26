import { createSelector } from "reselect";
import { PlayerDataType } from "..";
import { RootState } from "../store";

const store = (state: RootState) => state;

export const playerSelector = {
  getPlayerById: (id: string) =>
    createSelector(store, (state) =>
      state.players.find((i: PlayerDataType) => i.id === id)
    ),
};
