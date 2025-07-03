/* eslint-disable react/prop-types */
import useSmallSize from "../hooks/useSmallSize";

export default function LayoutOne({ children }) {
  const onSmallSize = useSmallSize(768);

  return (
    <div>
      <h2>{children}</h2>
      <h2>On my - {onSmallSize ? "Small" : "Big"} - Screen</h2>
    </div>
  );
}
