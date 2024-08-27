import React, { useState, useRef, useCallback, useLayoutEffect } from "react";
import "./Popover.css";

interface PopoverProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
}

/**
 * TODO: pasar la prop de sizeAsTrigger, hacer esto claculando con una referencia el tirgger
 * y poner ese tamaño en el contenido
 */

export const Popover: React.FC<PopoverProps> = ({
  trigger,
  content,
  position = "bottom",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [popoverPosition, setPopoverPosition] = useState(position);
  const [popoverStyles, setPopoverStyles] = useState<React.CSSProperties>({});
  const popoverRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  const adjustPopoverPosition = useCallback(() => {
    const popoverEl = popoverRef.current;
    const triggerEl = triggerRef.current;

    if (!popoverEl || !triggerEl) return;

    const triggerRect = triggerEl.getBoundingClientRect();
    const popoverRect = popoverEl.getBoundingClientRect();

    let finalPosition = position;
    let styles: React.CSSProperties = {};

    switch (position) {
      case "bottom":
        if (window.innerHeight - triggerRect.bottom < popoverRect.height) {
          finalPosition = "top";
        }
        break;
      case "top":
        if (triggerRect.top < popoverRect.height) {
          finalPosition = "bottom";
        }
        break;
      case "right":
        if (window.innerWidth - triggerRect.right < popoverRect.width) {
          finalPosition = "left";
        }
        break;
      case "left":
        if (triggerRect.left < popoverRect.width) {
          finalPosition = "right";
        }
        break;
      default:
        finalPosition = "bottom";
    }

    if (finalPosition === "bottom" || finalPosition === "top") {
      if (triggerRect.left + popoverRect.width > window.innerWidth) {
        styles = { right: "0px", left: "auto", transform: "none" };
      } else if (triggerRect.right - popoverRect.width < 0) {
        styles = { left: "0px", transform: "none" };
      } else {
        styles = { left: "50%", transform: "translateX(-50%)" };
      }
    } else if (finalPosition === "left" || finalPosition === "right") {
      if (triggerRect.top + popoverRect.height > window.innerHeight) {
        styles = { bottom: "0px", top: "auto", transform: "none" };
      } else if (triggerRect.bottom - popoverRect.height < 0) {
        styles = { top: "0px", transform: "none" };
      } else {
        styles = { top: "50%", transform: "translateY(-50%)" };
      }
    }

    setPopoverPosition(finalPosition);
    setPopoverStyles(styles);
  }, [position]);

  useLayoutEffect(() => {
    if (isOpen) {
      adjustPopoverPosition();
      window.addEventListener("scroll", adjustPopoverPosition);
      window.addEventListener("resize", adjustPopoverPosition);
    }

    return () => {
      window.removeEventListener("scroll", adjustPopoverPosition);
      window.removeEventListener("resize", adjustPopoverPosition);
    };
  }, [adjustPopoverPosition, isOpen]);

  return (
    <div className="popover-container">
      <div ref={triggerRef} onClick={togglePopover} className="popover-trigger">
        {trigger}
      </div>

      <div
        ref={popoverRef}
        className={`popover-content popover-${popoverPosition} popover-content--${isOpen ? "visible" : "hide"}`}
        style={popoverStyles}
      >
        {content}
      </div>
    </div>
  );
};
