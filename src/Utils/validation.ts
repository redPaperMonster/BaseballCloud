import { hasEmptyValues } from "../Routes/User/Profile/Sidebar/Utils/hasEmptyValues";
import { UserDataType } from "../Store";

export const validation = {
  required: (value: string) => {
    if (typeof value === "string") {
      return value.trim() ? undefined : "Required";
    }
    return "Required";
  },
  requiredNumber: (value: string) => {
    if (typeof +value === "number") {
      return +value !== 0 ? undefined : "Required";
    }
    return "Required";
  },
  ageValidation: (value: string) => {
    if (typeof +value === "number") {
      if (+value > 30) {
        return "Must not be older than 30";
      }
      return +value !== 0 ? undefined : "Required";
    }
    return "Required";
  },
  heightValidation: (value: string) => {
    if (typeof +value === "number") {
      if (+value > 7) {
        return "Maximum height is 7";
      }
      if (+value < 4) {
        return "Minimal height is 4";
      }
      return +value !== 0 ? undefined : "Required";
    }
    return "Required";
  },
  weightValidation: (value: string) => {
    if (typeof +value === "number") {
      if (+value > 350) {
        return "Maximum weight is 350 lbs";
      }
      if (+value < 50) {
        return "Minimal weight is 50 lbs";
      }
      return +value !== 0 ? undefined : "Required";
    }
    return "Required";
  },
  emailValidate: (value: string) => {
    let pattern =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (typeof value === "string") {
      return pattern.test(value) ? undefined : "Email is not correct";
    }
    return "Email required";
  },
  passwordValidation: (value: string) => {
    if (typeof value === "string") {
      if (value.length < 8) {
        return "Must contain more than 8 characters";
      }
      return undefined;
    }
    return "Required!";
  },
  sidebarFormValidation: (values: UserDataType) => {
    const {
      first_name,
      last_name,
      position,
      age,
      feet,
      weight,
      throws_hand,
      bats_hand,
    } = values;
    if (
      hasEmptyValues({
        first_name,
        last_name,
        position,
        age,
        feet,
        weight,
        throws_hand,
        bats_hand,
      })
    ) {
      return { biography: "* Fill out the required fields" };
    }
    return {};
  },
  passwordEqualValidation: (values: {
    password: string;
    password_confirmation: string;
  }) => {
    const errors = { password_confirmation: "" };
    if (!values.password_confirmation) {
      errors.password_confirmation = "Required";
      return errors;
    } else if (values.password_confirmation !== values.password) {
      errors.password_confirmation = "Passwords are not equal";
      return errors;
    }
  },
};
