import * as React from "react";
import { Input, InputContainer, FindButton } from "./FindInputStyle";
import { SearchIcon } from "../../../Assets/icons";
interface FindInputProps {
  placeholder: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

const FindInput: React.FC<FindInputProps> = ({ placeholder, onChange }) => {
  return (
    <InputContainer>
      <FindButton>
        <span>
          <SearchIcon />
        </span>
      </FindButton>
      <Input
        placeholder={placeholder}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    </InputContainer>
  );
};
export default FindInput;
