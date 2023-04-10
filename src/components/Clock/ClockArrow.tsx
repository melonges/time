import { FC } from "react";

interface ClockArrowProps {
  type: "hour" | "minute" | "second";
  angle: number;
}

export const ClockArrow: FC<ClockArrowProps> = ({ type, angle }) => {
  return (
    <div
      className={`Clock__arrow--${type}`}
      style={{
        transform: `rotate(${angle}deg)`,
      }}
    />
  );
};
