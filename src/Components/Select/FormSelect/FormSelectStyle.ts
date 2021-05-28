import styled from "styled-components";
import { colors } from "../../../Utils/colors";
import CreatableSelect from "react-select/creatable";

export const SelectElement = styled(CreatableSelect)`
  .react-select-container {
  }
  .react-select__menu {
    z-index: 10;
  }
  .react-select__control {
    max-width: 100%;
    background-color: ${colors.lightGray};
    border: none;

    &:hover {
      border: none;
      outline: none;
    }
  }
  .react-select__control--is-focused {
    &:hover {
      border: none;
    }
    box-shadow: none;
  }
  .react-select__indicator-separator {
    display: none;
  }

  .react-select__value-container {
    &:hover {
      outline: none;
      border: none;
    }
  }
  .react-select__option {
    &:hover {
      background-color: ${colors.softLightBlue};
    }
    color: ${colors.darkGray};
  }
  .react-select__single-value {
    color: ${colors.darkGray};
  }
  .react-select__option--is-focused {
    background-color: ${colors.softLightBlue};
  }
  .react-select__option--is-selected {
    background-color: ${colors.softLightBlue};
  }
`;

export const ErrorText = styled.div`
  display: flex;
  color: ${colors.red};
  margin-top: 8px;
  margin-bottom: 4px;
`;
