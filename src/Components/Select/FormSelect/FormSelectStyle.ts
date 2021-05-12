import styled from "styled-components";
import { colors } from "../../../Utils/colors";
import CreatableSelect from "react-select/creatable";

export const SelectElement = styled(CreatableSelect)`
  .react-select-container {
  }

  .react-select__control {
    max-width: 100%;
    height: 38px;
    background-color: ${colors.lightGray};
    border-color: transparent;
    &:hover {
      outline: none;
      background-color: ${colors.white};
      border: 1px solid ${colors.lightBlue};
    }
  }

  .react-select__indicators {
  }
  .react-select__option {
  }
  .react-select__indicator-separator {
    display: none;
  }
  .react-select__value {
  }
  .react-select__value-container {
    &:hover {
      outline: none;
      background-color: ${colors.white};
    }
  }
`;
