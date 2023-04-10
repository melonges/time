export const ClockFace = () => {
  return (
    <>
      {Array.from(Array(12).keys()).map((i) => (
        <div
          key={i}
          className="Clock__face--number"
          style={{ transform: `rotate(${i * 30}deg)` }}
        >
          {i === 0 ? 12 : i}
        </div>
      ))}
    </>
  );
};
