import { createSelector } from "reselect";
import { RootState } from "../store";

const store = (state: RootState) => state;

export const playerSelector = {
  getToken: () => createSelector(store, (state) => state.user.token),
  getPlayerById: (id: string) =>
    createSelector(store, (state) =>
      state.players.filter((i: any) => i.id === id)
    ),
};
