import * as React from "react";
import { Input, InputContainer, FindButton } from "./FindInputStyle";
import { SearchIcon } from "../../../Assets/icons";
interface FindInputProps {
  placeholder: string;
}

const FindInput: React.FC<FindInputProps> = ({ placeholder }) => {
  return (
    <InputContainer>
      <FindButton>
        <span>
          <SearchIcon />
        </span>
      </FindButton>
      <Input placeholder={placeholder} />
    </InputContainer>
  );
};
export default FindInput;
