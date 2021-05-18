import React, { useState } from "react";
import { useSelector } from "react-redux";
import { SearchIcon } from "../../../../../Assets/icons";
import { FilterInput } from "../../../../../Components";
import { userSelector } from "../../../../../Store";
import {
  ComparisonHeader,
  ComparisonTable,
  ComparisonTableCell,
  ComparisonTableRow,
  FindInput,
  PlayerAvatar,
  PlayerSection,
  TabContainer,
  UserAvatar,
  UserName,
  UserSection,
} from "./ComparisonTabStyle";

export type ComparisonStyleProps = {
  url: string;
};

function ComparisonTab() {
  const userData = useSelector(userSelector.getUserData());

  return (
    <TabContainer>
      <ComparisonHeader>
        <UserSection>
          <UserAvatar url={userData.avatar} />
          <UserName>{`${userData.first_name} ${userData.last_name}`}</UserName>
        </UserSection>
        <PlayerSection>
          <PlayerAvatar url={userData.avatar} />
          <FilterInput icon={<SearchIcon />} placeholder="Enter players name" />
        </PlayerSection>
      </ComparisonHeader>
      <ComparisonTable>
        <ComparisonTableRow>
          <ComparisonTableCell>Age: 22</ComparisonTableCell>
          <ComparisonTableCell>Age: 12</ComparisonTableCell>
        </ComparisonTableRow>
        <ComparisonTableRow>
          <ComparisonTableCell>Height: 22</ComparisonTableCell>
          <ComparisonTableCell>Height: 12</ComparisonTableCell>
        </ComparisonTableRow>
        <ComparisonTableRow>
          <ComparisonTableCell>Weight: 22</ComparisonTableCell>
          <ComparisonTableCell>Weight: 12</ComparisonTableCell>
        </ComparisonTableRow>
      </ComparisonTable>
    </TabContainer>
  );
}

export default ComparisonTab;
