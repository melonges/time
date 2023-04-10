import { FC } from "react";
import { ClockCircle } from "./ClockCircle";
import { ClockFace } from "./ClockFace";
import { ClockArrows, ClockArrowsProps } from "./ClockArrows";

interface ClockProps extends ClockArrowsProps {}

export const Clock: FC<ClockProps> = ({ startTime }) => {
  return (
    <div className="Clock__container">
      <ClockCircle />
      <ClockFace />
      <ClockArrows startTime={startTime} />
    </div>
  );
};
