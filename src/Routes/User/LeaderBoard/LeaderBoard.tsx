import { BoldArrowIcon } from "../../../Assets/icons";
import { FilterInput, FilterSelect } from "../../../Components";
import { filterPositionOptions } from "../../../Utils/options";
import {
  FilterContainer,
  FilterWrapper,
  HeaderText,
  LeaderBoardContainer,
  LeaderBoardHeader,
} from "./LeaderBoardStyle";
import LeaderBoardTabs from "./Tabs/LeaderBoardTabs";

function LeaderBoard() {
  return (
    <LeaderBoardContainer>
      <LeaderBoardHeader>
        <HeaderText>Leaderboard</HeaderText>
        <FilterContainer>
          <FilterInput
            icon={<BoldArrowIcon />}
            placeholder="Team"
            width="40"
            handleFocus
            onChange={() => {}}
          />
          <FilterWrapper>
            <FilterInput
              onChange={() => {}}
              icon={<BoldArrowIcon />}
              placeholder="School"
              width="50"
              handleFocus
            />
          </FilterWrapper>
          <FilterWrapper>
            <FilterSelect
              options={filterPositionOptions}
              onInputChange={() => {}}
              width="120"
              placeholder="Position"
            />
          </FilterWrapper>
        </FilterContainer>
      </LeaderBoardHeader>
      <LeaderBoardTabs />
    </LeaderBoardContainer>
  );
}

export default LeaderBoard;
