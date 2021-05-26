import { SchoolDataType, TeamDataType } from "../../../../Store";

export type PitchingDataType = {
  age: number;
  favorite: boolean;
  horizontal_break: any;
  pitch_type: string;
  pitcher_datraks_id: string;
  pitcher_name: string;
  school: SchoolDataType;
  spin_rate: number;
  teams: TeamDataType[];
  velocity: number;
  vertical_break: any;
};
export type BatterDataType = {
  age: number;
  batter_datraks_id: string;
  batter_name: string;
  distance: number;
  exit_velocity: number;
  favorite: false;
  launch_angle: number;
  school: SchoolDataType;
  teams: TeamDataType[];
};
