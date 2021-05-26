import styled from "styled-components";
import { colors } from "../../../Utils/colors";
import CreatableSelect from "react-select/creatable";
import { FilterSelectStyleProps } from "./FilterSelect";

export const SelectElement = styled(CreatableSelect)<FilterSelectStyleProps>`
  .react-select-container {
    border: none;
  }
  .react-select__menu {
    z-index: 10;
  }
  .react-select__control {
    width: ${(props) => props.width}px;
    border: none;
    cursor: pointer;
  }
  .react-select__control--is-focused {
    &:hover {
      border: none;
    }
    box-shadow: none;
  }
  .react-select__option {
    &:hover {
      background-color: ${colors.softLightBlue};
    }
    color: ${colors.darkGray};
  }
  .react-select__single-value {
    color: ${colors.lightBlue};
  }
  .react-select__option--is-focused {
    background-color: ${colors.softLightBlue};
  }
  .react-select__option--is-selected {
    background-color: ${colors.softLightBlue};
  }

  .react-select__indicator-separator {
    display: none;
  }

  .react-select__placeholder {
    color: ${colors.lightBlue};
  }
`;
