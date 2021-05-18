import React, { useState } from "react";
import DatePicker from "react-datepicker";
import {
  DatePickerWrapperStyles,
  FilterWrapper,
  SessionHeader,
  SessionTable,
  SessionTitle,
  TabContainer,
  TableFirstHeader,
  TableHeader,
  TableHeadersWrapper,
  TableItems,
  TableLastHeader,
  ClearFiltersButton,
} from "./SessionTabStyle";
import "react-datepicker/dist/react-datepicker.css";
import { DatePickerCustomInput } from "./Components";
function SessionTab() {
  const [date, setDate] = useState(new Date());
  return (
    <TabContainer>
      <SessionHeader>
        <SessionTitle>Sessions</SessionTitle>
        <FilterWrapper>
          <ClearFiltersButton>Clear Filters</ClearFiltersButton>
          <DatePickerWrapperStyles />
          <DatePicker
            onChange={() => {}}
            popperClassName="date_picker full-width"
            customInput={<DatePickerCustomInput />}
          />
        </FilterWrapper>
      </SessionHeader>
      <SessionTable>
        <TableHeadersWrapper>
          <TableFirstHeader>Date</TableFirstHeader>
          <TableHeader>Type</TableHeader>
          <TableHeader>Name</TableHeader>
          <TableLastHeader>Purchased</TableLastHeader>
        </TableHeadersWrapper>
        <TableItems>The player haven't had any sessions yet!</TableItems>
      </SessionTable>
    </TabContainer>
  );
}

export default SessionTab;
