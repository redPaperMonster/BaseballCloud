import { SchoolDataType, TeamDataType } from "../";

export type PlayerDataType = {
  age: number;
  events: [];
  favorite: boolean;
  feet: number;
  first_name: string;
  id: string;
  inches: number;
  last_name: string;
  position: string;
  position2: string;
  school: SchoolDataType;
  school_year: string;
  teams: TeamDataType[];
  weight: number;
};
