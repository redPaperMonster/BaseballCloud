import * as React from "react";
import { Button } from "./SubmitButtonStyle";
interface SubmitProps {
  title: string;
  isCancelType?: boolean;
  onClick: () => void;
}

export type SubmitButtonStyleProps = {
  isCancelType: boolean;
};

const SubmitButton: React.FC<SubmitProps> = ({
  title,
  isCancelType = false,
  onClick,
  children,
}) => {
  return (
    <Button onClick={onClick} isCancelType={isCancelType}>
      {children || title}
    </Button>
  );
};
export default SubmitButton;
