import { useCallback, useEffect, useState } from "react";

export default function useSmallSize(onSmallDeviceThrsed) {
  const [onSmallSize, setOnSmallSize] = useState(false);

  const checkScreenSize = useCallback(() => {
    if (window.innerWidth <= onSmallDeviceThrsed) {
      setOnSmallSize(true);
    } else {
      setOnSmallSize(false);
    }
  }, [onSmallDeviceThrsed]);

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    //clean up eventlistener
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, [checkScreenSize]);

  return onSmallSize;
}
