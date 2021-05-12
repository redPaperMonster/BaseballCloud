import React, { useState } from "react";
import {
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
} from "./SessionTabStyle";

function SessionTab() {
  return (
    <TabContainer>
      <SessionHeader>
        <SessionTitle>Sessions</SessionTitle>
        {/* TODO:FILTER DATE PICKER */}
        <FilterWrapper>tut budut filtry</FilterWrapper>
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
