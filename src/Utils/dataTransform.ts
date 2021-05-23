import mapValues from "lodash.mapvalues";

export const transformData = (data: any) => {
  return mapValues(data, (i: any) => {
    return i !== data.avatar && i !== data.biography && typeof i === "string"
      ? decorateText(i)
      : i;
  });
};

const decorateText = (text: string) => {
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
