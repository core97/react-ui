import { useState, useEffect, RefObject, useCallback } from "react";
import { Distance } from "./useViewportDistance.types";

export function useViewportDistance<T extends HTMLElement>(
  elementRef: RefObject<T>
): Distance {
  const [distance, setDistance] = useState<Distance>({
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
  });

  const calculateDistance = useCallback(() => {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();

      setDistance({
        bottom: window.innerHeight - rect.bottom,
        left: rect.left,
        right: window.innerWidth - rect.right,
        top: rect.top,
      });
    }
  }, [elementRef]);

  useEffect(() => {
    calculateDistance();

    window.addEventListener("resize", calculateDistance);

    window.addEventListener("scroll", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);

      window.removeEventListener("scroll", calculateDistance);
    };
  }, [calculateDistance]);

  return distance;
}
