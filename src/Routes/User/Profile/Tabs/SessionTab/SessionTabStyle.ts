import styled, { createGlobalStyle } from "styled-components";
import { colors } from "../../../../../Utils/colors";

export const TabContainer = styled.div`
  height: 100%;
  width: 100%;
  min-height: 420px;
  color: ${colors.darkGray};
  font-size: 16px;
`;

export const SessionHeader = styled.div`
  display: flex;
  width: 100%;
  flex: 0 0 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 21px;
`;

export const SessionTitle = styled.div`
  color: ${colors.black};
  font-size: 18px;
  font-weight: 400;
  text-align: left;
`;

export const FilterWrapper = styled.div``;

export const SessionTable = styled.div``;
export const TableHeadersWrapper = styled.div`
  top: 0;
  background: #fff;
  position: sticky;
  top: 0;
  min-height: 44px;
  margin-bottom: 6px;
  display: flex;
  width: 100%;
  flex: 0 0 100%;
  align-items: center;
  border-radius: 4px;
  max-width: 100%;
`;
export const TableHeader = styled.div`
  width: 30%;
  flex: 1 0 28%;
  background: #fff;
  font-size: 14px;
  line-height: 1;
  font-weight: 300;
  color: ${colors.darkGray};
`;
export const TableFirstHeader = styled(TableHeader)`
  width: 35%;
  flex: 1 0 32%;
`;
export const TableLastHeader = styled(TableHeader)`
  width: 10%;
  flex: 1 0 10%;
`;
export const TableItems = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  min-height: 420px;
  color: ${colors.darkGray};
  font-size: 16px;
`;
export const ClearFiltersButton = styled.button`
  color: ${colors.lightBlue};
  padding: 7px 19px 10px 18px;
  border-radius: 4px;
  box-shadow: none;
  font-size: 16px;
  border: none;
  font-weight: 400;
  background-color: ${colors.white};
  cursor: pointer;
`;

export const DatePickerWrapperStyles = createGlobalStyle`
.react-datepicker .react-datepicker__header {
        background-color: ${colors.white};
        color: red;
    }
    .date_picker { 
      left: -90px !important;
      border: none !important;

    }
    .react-datepicker__navigation {
      text-align: center;
      cursor: pointer;
      position: absolute;
      top: 10px;
      width: 0;
      border: .25rem solid transparent;
      z-index: 1;
    }
    .react-datepicker__navigation--next {
      right: 10px;
      border-left-color: #ccc;
  }
    .react-datepicker__navigation--previous {
    left: 10px;
    border-right-color: #ccc;
}
    .react-datepicker__triangle{
      border-bottom-color: ${colors.white} !important;
      margin-left: 150px !important;
      
    }
    .react-datepicker__triangle::before {
      background-color: ${colors.white} !important;
    }
    .react-datepicker-popper .react-datepicker__current-month {
      font-size: 14px;
      color: #red !important;
      font-weight: normal;
      border: none !important;
  }
 .react-datepicker__day-name {
    display: inline-flex;
    width: 32px;
    height: 32px;
    color: #414f5a;
    align-items: center;
    line-height: 1;
    justify-content: center;
    text-align: center;
    margin: 2px;
    font-size: 14px;
}
.react-datepicker-popper .react-datepicker {
  background-color: #fff;
  border: none;
  font-size: 14px;
  border-radius: 4px;
}
.react-datepicker-popper {
  margin-top: 12px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 3px 8px 0 rgb(0 0 0 / 15%);
  border: solid 1px #ebebeb;
  z-index: 2;
}
.react-datepicker-popper .react-datepicker__day--selected {
  background-color: #48bbff !important;
  color: #fff;
}
`;
