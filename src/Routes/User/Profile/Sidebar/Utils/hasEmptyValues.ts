import _ from "lodash";

export const hasEmptyValues = (values: any) => {
  return _.values(values).some((i) => i === undefined || i === null);
};
