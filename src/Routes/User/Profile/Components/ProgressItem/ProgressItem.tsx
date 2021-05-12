import { useQuery } from "@apollo/client";
import React from "react";
import { ProgressBar } from "../../../../../Components";

import {
  ProgressInfo,
  ProgressItemWrapper,
  ProgressTitle,
  ProgressTitleWrapper,
} from "./ProgressItemStyle";

interface ProgressProps {
  title: string;
  value: string;
  percent?: number;
}
const ProgressItem: React.FC<ProgressProps> = ({
  title,
  value,
  percent = 0,
}: ProgressProps) => {
  return (
    <ProgressItemWrapper>
      <ProgressTitleWrapper>
        <ProgressTitle>{title}</ProgressTitle>
        <ProgressInfo>{value}</ProgressInfo>
      </ProgressTitleWrapper>

      <ProgressBar percent={percent} />
    </ProgressItemWrapper>
  );
};

export default ProgressItem;
