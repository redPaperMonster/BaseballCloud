import { mapValues } from "lodash";
import { SchoolDataType, TeamDataType } from "../../../../../Store";
import {
  FacilityDataType,
  UserDataType,
} from "../../../../../Store/UserSlice/types";
import { SelectOptionType } from "../../../../../Utils";

export function isArray(arr: any) {
  return arr instanceof Array;
}
type InitValuesType = {
  first_name: string;
  last_name: string;
  avatar?: string;
  position: string | SelectOptionType;
  position2: string | SelectOptionType;
  throws_hand?: string | SelectOptionType;
  bats_hand?: string | SelectOptionType;
  biography?: string | undefined;
  school_year: string | SelectOptionType;
  feet: number;
  inches: number;
  weight: number;
  age: number;
  school: SchoolDataType | SelectOptionType;
  teams: TeamDataType[];
  facilities?: FacilityDataType[];
  recent_events?: [];
};
export const setDataToOptions = (initValues: UserDataType) => {
  const defOptions = mapValues(initValues, (item) => {
    if (item === initValues.teams) {
      return item.map((i: TeamDataType) => i.id);
    }
    if (item === initValues.facilities) {
      return item?.map((i: FacilityDataType) => i.id);
    }
    return item;
  });
  return defOptions;
};
export const setDefaultOption = (
  options: SelectOptionType | SelectOptionType[],
  input: string | string[]
) => {
  if (isArray(options)) {
    return (options as SelectOptionType[]).filter((option) => {
      if (isArray(input)) {
        const arr = (input as string[]).filter(
          (i: string) => i === option.value
        );
        return arr.length !== 0;
      } else if (input === option.value) {
        return true;
      }
    });
  } else if ((options as SelectOptionType).value === (input as any).value) {
  }
};

export const filterData = (data: any, values: any) => {
  return data.filter((item: any) => {
    if (isArray(values)) {
      const arr = values.filter((i: any) => {
        return i === item.id;
      });
      return arr.length !== 0;
    } else if (item === values) {
      return true;
    }
  });
};

export const setValuesToRequestData = (values: InitValuesType) => {
  return {
    ...values,
    biography: values.biography || " ",
    throws_hand:
      (values.throws_hand as SelectOptionType).value || values.throws_hand,
    position: (values.position as SelectOptionType).value || values.position,
    position2:
      (values.position2 as SelectOptionType)?.value || values?.position2,
    bats_hand: (values.bats_hand as SelectOptionType).value || values.bats_hand,
    school_year:
      (values.school_year as SelectOptionType)?.value || values.school_year,
    age: Number(values.age),
    feet: Number(values.feet),
    inches: Number(values.inches),
    weight: Number(values.weight),
  };
};
