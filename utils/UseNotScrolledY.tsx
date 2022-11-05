import { useEffect, useState } from "react";

export const useNotScrolledY = () => {
  const [isScrolledYZero, setNotScrolledY] = useState(true);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY == 0) {
        setNotScrolledY(true);
      } else {
        setNotScrolledY(false);
      }
    };
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);
  return isScrolledYZero;
};
