import * as React from "react";
import { Input, InputContainer, FindButton } from "./SearchInputStyle";
import { SearchIcon } from "../../../Assets/icons";
interface SearchInputProps {
  placeholder: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder, onChange }) => {
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
export default SearchInput;
