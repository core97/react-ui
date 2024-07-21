import { useState, useEffect, RefObject, useCallback } from "react";

export function useDistanceToViewport<T extends HTMLElement>(
  direction: keyof Pick<DOMRect, "bottom" | "left" | "right" | "top">,
  elementRef: RefObject<T>
): number {
  const [distance, setDistance] = useState(0);

  const calculateDistance = useCallback(() => {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();

      if (direction === "bottom") {
        setDistance(window.innerHeight - rect.bottom);
      } else if (direction === "left") {
        setDistance(rect.left);
      } else if (direction === "right") {
        setDistance(window.innerWidth - rect.right);
      } else if (direction === "top") {
        setDistance(rect.top);
      }
    }
  }, [direction, elementRef]);

  useEffect(() => {
    calculateDistance();

    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, [calculateDistance]);

  return distance;
}
