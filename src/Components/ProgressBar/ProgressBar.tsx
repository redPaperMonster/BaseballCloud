import * as React from "react";
import { Line } from "rc-progress";
import { colors } from "../../Utils/colors";
interface ProgressBarProps {
  percent: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percent }) => {
  return (
    <div>
      <Line
        percent={percent}
        strokeWidth={1}
        trailWidth={1}
        trailColor={colors.lightGray}
        strokeColor={colors.yellow}
      />
    </div>
  );
};
export default ProgressBar;
