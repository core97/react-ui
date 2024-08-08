import { PopoverPositionX, PopoverPositionY } from "./Popover.types";

export const calculatePosition = ({
  contentRef,
  triggerRef,
  placement,
}: {
  triggerRef: React.RefObject<HTMLDivElement>;
  contentRef: React.RefObject<HTMLDivElement>;
  placement: PopoverPositionX | PopoverPositionY;
}): { y?: PopoverPositionY; x?: PopoverPositionX } => {
  const position: { y?: PopoverPositionY; x?: PopoverPositionX } = {
    x: undefined,
    y: undefined,
  };

  const triggerRect = triggerRef.current?.getBoundingClientRect();
  const contentRect = contentRef.current?.getBoundingClientRect();

  if (triggerRect && contentRect) {
    const popoverHeight = contentRef.current?.offsetHeight ?? 0;
    const availableSpaceBelow = window.innerHeight - triggerRect.bottom;
    const availableSpaceAbove = triggerRect.top;

    if (
      (placement === "left" || placement === "right") &&
      (contentRef.current?.offsetHeight || 0) <=
        (triggerRef.current?.offsetHeight || 0)
    ) {
      position.y = undefined;
    } else if (availableSpaceBelow < popoverHeight) {
      position.y = "top";
    } else if (availableSpaceAbove < popoverHeight) {
      position.y = "bottom";
    } /* else {
      position.y =
        placement === "bottom" || placement === "top" ? placement : undefined;
    } */

    const diffWidth = Math.abs(
      (contentRef.current?.offsetWidth ?? 0) -
        (triggerRef.current?.offsetWidth ?? 0)
    );

    const availableSpaceRight = window.innerWidth - triggerRect.right;
    const availableSpaceLeft = triggerRect.left;

    if (
      (placement === "bottom" || placement === "top") &&
      (contentRef.current?.offsetWidth || 0) <=
        (triggerRef.current?.offsetWidth || 0)
    ) {
      position.x = undefined;
    } else if (availableSpaceRight < diffWidth) {
      position.x = "left";
    } else if (availableSpaceLeft < diffWidth) {
      position.x = "right";
    } /* else {
      position.x =
        placement === "left" || placement === "right" ? placement : undefined;
    } */
  }

  return position;
};
