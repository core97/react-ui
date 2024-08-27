import React, {
  useState,
  useRef,
  useCallback,
  useLayoutEffect,
  useId,
  useEffect,
  forwardRef,
} from "react";
import { ButtonProps } from "../Button";
import { useDisclosure } from "../../../hooks/useDisclosure";
import { POPOVER_CLICK_TRIGGER_EVENT } from "./Popover.constants";
import { PopoverProps } from "./Popover.types";
import styles from "./Popover.module.css";

// TODO: Ponerle lo de size as trigger

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  (
    {
      trigger,
      content,
      className,
      contentClassName,
      position = "bottom",
      onBlur,
      sizeAsTrigger,
      withContentStyles,
      ...props
    },
    ref
  ) => {
    const [popoverPosition, setPopoverPosition] = useState(position);
    const [popoverStyles, setPopoverStyles] = useState<React.CSSProperties>({});
    const popoverRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    const id = useId();

    const defaultHandler = useDisclosure();

    const { isOpen, onClose, onOpen } = {
      isOpen: props.isOpen ?? defaultHandler.isOpen,
      onClose: props.onClose ?? defaultHandler.onClose,
      onOpen: props.onOpen ?? defaultHandler.onOpen,
    };

    const contentStyles = [
      styles["popover-content"],
      styles[`popover-${popoverPosition}`],
      styles[`popover-content--${isOpen ? "visible" : "hide"}`],
      withContentStyles ? styles["popover-content--styled"] : "",
      sizeAsTrigger && (position === "bottom" || position === "top")
        ? styles["popover-content--full-width"]
        : "",
      sizeAsTrigger && (position === "left" || position === "right")
        ? styles["popover-content--full-height"]
        : "",
      contentClassName || "",
    ];

    const handleOnClick = () => {
      const clickTriggerEvent = new CustomEvent(POPOVER_CLICK_TRIGGER_EVENT, {
        detail: { id, isOpen: isOpen },
      });

      document.dispatchEvent(clickTriggerEvent);
    };

    const handleOnBlur: React.FocusEventHandler<HTMLDivElement> = (e) => {
      e.stopPropagation();

      if (!popoverRef.current?.contains(e.relatedTarget)) {
        onClose();
        onBlur?.(e);
      }
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

    useEffect(() => {
      // @ts-expect-error event handling
      function handleOnToggle(event) {
        if (event.detail.id === id && event.detail.isOpen) {
          onClose();
        } else if (event.detail.id === id && !event.detail.isOpen) {
          onOpen();
        } else {
          onClose();
        }
      }

      document.addEventListener(POPOVER_CLICK_TRIGGER_EVENT, handleOnToggle);

      return () =>
        document.removeEventListener(
          POPOVER_CLICK_TRIGGER_EVENT,
          handleOnToggle
        );
    }, [onClose, id, onOpen]);

    return (
      <div
        ref={ref}
        className={`${styles["popover-container"]} ${className || ""}`}
        onBlur={handleOnBlur}
      >
        <div ref={triggerRef} className={styles["popover-trigger"]}>
          {React.isValidElement(trigger) &&
            React.cloneElement(trigger as React.ReactElement<ButtonProps>, {
              ...trigger.props,
              onClick: handleOnClick,
              ref: triggerRef,
              "aria-haspopup": "dialog",
              "aria-expanded": !!isOpen,
            })}
        </div>

        <div
          ref={popoverRef}
          role="dialog"
          aria-modal="true"
          className={contentStyles.join(" ")}
          style={popoverStyles}
        >
          {content}
        </div>
      </div>
    );
  }
);
