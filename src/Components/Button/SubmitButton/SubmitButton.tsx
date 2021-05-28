import * as React from "react";
import Loader from "react-loader-spinner";
import { Button } from "./SubmitButtonStyle";
interface SubmitProps {
  title: string;
  onClick: () => void;
  type?: SubmitButtonType;
  loading?: boolean;
}

export type SubmitButtonStyleProps = {
  isCancelType: boolean;
};
export enum SubmitButtonType {
  submit,
  cancel,
}
const SubmitButton: React.FC<SubmitProps> = ({
  title,
  type = SubmitButtonType.submit,
  onClick,
  loading = false,
}) => {
  return (
    <Button onClick={onClick} isCancelType={type === SubmitButtonType.cancel}>
      {loading ? (
        <Loader type="ThreeDots" color="#fff" height={10} width={20} />
      ) : (
        title
      )}
    </Button>
  );
};
export default SubmitButton;
