import { createSelector } from "reselect";
import { RootState } from "../store";

const store = (state: RootState) => state;

export const playerSelector = {
  getPlayersByOffset: (
    offset: number,
    perPage: number,
    school: string,
    team: string,
    name: string
  ) =>
    createSelector(store, (state) => {
      let newState = [...state.players];
      newState = newState.filter((i) => {
        if (name) {
          return (
            i.first_name.toLowerCase().includes(name.toLowerCase()) ||
            i.last_name.toLowerCase().includes(name.toLowerCase())
          );
        }
        return i;
      });
      newState = newState.filter((i) => {
        if (school) {
          return (
            i.school &&
            i.school.name.toLowerCase().includes(school.toLowerCase())
          );
        }
        return i;
      });
      newState = newState.filter((i) => {
        if (team) {
          return (
            i.team && i.team.name.toLowerCase().includes(team.toLowerCase())
          );
        }
        return i;
      });
      newState = newState.slice(offset, newState.length);
      newState = newState.slice(0, perPage);
      return newState;
    }),
  getPlayerById: (id: string) =>
    createSelector(store, (state) =>
      state.players.find((i: any) => i.id === id)
    ),
};
