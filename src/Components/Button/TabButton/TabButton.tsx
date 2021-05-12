import * as React from "react";
import { Button } from "./TabButtonStyle";
interface TabProps {
  title: string;
  isActive?: boolean;
  onClick: () => void;
  onMouseOver?: () => void;
  onMouseOut?: () => void;
}

export type ButtonStyleProps = {
  isActive: boolean;
};

const TabButton: React.FC<TabProps> = ({
  title,
  isActive = false,
  onClick,
  onMouseOut,
  onMouseOver,
  children,
}) => {
  return (
    <div onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      {children}
      <Button onClick={onClick} isActive={isActive}>
        {title}
      </Button>
    </div>
  );
};
export default TabButton;
