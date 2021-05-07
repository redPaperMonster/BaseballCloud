import { createSelector } from "reselect";
import { RootState } from "../store";

const store = (state: RootState) => state;

export const userSelector = {
  getToken: () => createSelector(store, (state) => state.user.token),
  getUserData: () => createSelector(store, (state) => state.user),
};
