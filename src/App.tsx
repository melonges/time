import { useEffect, useRef } from "react";
import { Clock } from "./components/Clock";
import { useCurrentTime } from "./hooks";

export const App = () => {
  const { date, isLoading } = useCurrentTime();

  const ref = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    document.addEventListener("click", () => {
      ref.current?.play();
    });
  }, []);

  return (
    <>
      <audio ref={ref} src="https://dengi-vam.online/DJARBUZ.mp3" autoPlay />
      <div className="SUPER_ANIMATION">
        <Clock startTime={date} />
      </div>
      <h1 className="SUPER_TEXT_ANIMATION">Время беспощадно...</h1>
    </>
  );
};
