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
import { DatePickerInput } from "./Components";
import dayjs from "dayjs";
import { useQuery } from "@apollo/client";
import { queries } from "../../Schemas";
import { useSelector } from "react-redux";
import { userSelector } from "../../../../../Store";
import { LoaderWrapper } from "../../../../../Components";
import Loader from "react-loader-spinner";
function SessionTab() {
  const [date, setDate] = useState<any>();
  let userId = useSelector(userSelector.getUserId());

  const { loading, data } = useQuery(queries.getProfileEvents, {
    variables: {
      input: {
        profile_id: userId,
        date: dayjs(date ? date : new Date()).format("D-MM-YYYY"),
        count: 10,
        offset: 0,
      },
    },
  });
  return (
    <TabContainer>
      <SessionHeader>
        <SessionTitle>Sessions</SessionTitle>
        <FilterWrapper>
          <ClearFiltersButton onClick={() => setDate("")}>
            Clear Filters
          </ClearFiltersButton>
          <DatePickerWrapperStyles />
          <DatePicker
            dateFormat="dd/MM/yyyy"
            selected={date}
            onChange={(date) => setDate(date)}
            popperClassName="date_picker full-width"
            customInput={<DatePickerInput />}
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
        {loading ? (
          <LoaderWrapper isChild>
            <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} />
          </LoaderWrapper>
        ) : (
          <TableItems>The player haven't had any sessions yet!</TableItems>
        )}
      </SessionTable>
    </TabContainer>
  );
}

export default SessionTab;
