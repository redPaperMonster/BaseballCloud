import mapValues from "lodash.mapvalues";
import { UserDataType } from "../Store";

export const transformData = (data: UserDataType) => {
  return mapValues(data, (i: string | any) => {
    return i !== data.avatar &&
      i !== data.biography &&
      i !== data.first_name &&
      i !== data.last_name &&
      typeof i === "string"
      ? decorateText(i)
      : i;
  });
};

export const decorateText = (text: string) => {
  return (
    text &&
    text
      .replace("_", " ")
      .toLowerCase()
      .split(" ")
      .map((word: string) => word[0].toUpperCase() + word.substr(1))
      .join(" ")
  );
};
