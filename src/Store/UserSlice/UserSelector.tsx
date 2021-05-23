import { createSelector } from "reselect";
import { RootState } from "../store";

const store = (state: RootState) => state;

export const userSelector = {
  getToken: () => createSelector(store, (state) => state.user.token),
  getUserData: () => createSelector(store, (state) => state.user),
  getUserId: () => createSelector(store, (state) => state.user.id),
  getUserRequiredData: () =>
    createSelector(store, (state) => {
      const {
        first_name,
        last_name,
        position,
        age,
        feet,
        weight,
        throws_hand,
        bats_hand,
      } = state.user;
      return {
        first_name,
        last_name,
        position,
        age,
        feet,
        weight,
        throws_hand,
        bats_hand,
      };
    }),
};
