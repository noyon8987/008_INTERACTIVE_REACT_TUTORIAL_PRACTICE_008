/* eslint-disable react/prop-types */
import useSmallSize from "../hooks/useSmallSize";

export default function LayoutTwo({ children }) {
  const onSmallSize = useSmallSize(950);

  return (
    <div>
      <h2>{children}</h2>
      <h2 className={onSmallSize ? "small" : "big"}>
        On my - {onSmallSize ? "Small" : "Big"} - Screen
      </h2>
    </div>
  );
}
