export type UserDataType = {
  token?: string;
  id: string;
  first_name: string;
  last_name: string;
  avatar?: string;
  position: string;
  position2: string;
  throws_hand?: string;
  bats_hand?: string;
  biography?: string | undefined;
  school_year: string;
  feet: number;
  inches: number;
  weight: number;
  age: number;
  school: SchoolDataType;
  teams: TeamDataType[];
  facilities?: FacilityDataType[];
  recent_events?: [];
};
export type TeamDataType = {
  id: string;
  name: string;
};
export type SchoolDataType = {
  id: string;
  name: string;
};
export type FacilityDataType = {
  id: string;
  email: string;
  u_name: string;
};
