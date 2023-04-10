import { FC, useState, useEffect } from "react";
import { ClockArrow } from "./ClockArrow";

export interface ClockArrowsProps {
  startTime: Date | null;
}

export const ClockArrows: FC<ClockArrowsProps> = ({ startTime }) => {
  const [time, setTime] = useState<Date>(startTime || new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((time) => {
        time.setSeconds(time.getSeconds() + 1);
        return new Date(time);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hour = time.getHours() % 12;
  const minute = time.getMinutes();
  const second = time.getSeconds();

  const hourAngle = hour * 30 + minute / 2;
  const minuteAngle = minute * 6;
  const secondAngle = second * 6;

  return (
    <>
      <ClockArrow type="hour" angle={hourAngle} />
      <ClockArrow type="minute" angle={minuteAngle} />
      <ClockArrow type="second" angle={secondAngle} />
    </>
  );
};
