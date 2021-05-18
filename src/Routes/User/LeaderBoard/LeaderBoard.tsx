import { BoldArrowIcon } from "../../../Assets/icons";
import { FilterInput, FilterSelect } from "../../../Components";
import {
  FilterContainer,
  FilterWrapper,
  HeaderText,
  LeaderBoardContainer,
  LeaderBoardHeader,
} from "./LeaderBoardStyle";
import LeaderBoardTabs from "./Tabs/LeaderBoardTabs";

const positionOptions = [
  { value: "All", label: "All" },
  { value: "Catcher", label: "Catcher" },
];
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
          />
          <FilterWrapper>
            <FilterInput
              icon={<BoldArrowIcon />}
              placeholder="School"
              width="50"
              handleFocus
            />
          </FilterWrapper>
          <FilterWrapper>
            <FilterSelect
              options={positionOptions}
              onInputChange={() => {}}
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
