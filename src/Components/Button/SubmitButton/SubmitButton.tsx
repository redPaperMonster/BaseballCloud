import * as React from "react";
import { Button } from "./SubmitButtonStyle";
interface SubmitProps {
  title: string;
  cancel?: boolean;
  onClick: () => void;
}

export type SubmitButtonStyleProps = {
  cancel: boolean;
};

const SubmitButton: React.FC<SubmitProps> = ({
  title,
  cancel = false,
  onClick,
}) => {
  return (
    <Button onClick={onClick} cancel={cancel}>
      {title}
    </Button>
  );
};
export default SubmitButton;
