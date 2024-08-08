import {
  useState,
  useRef,
  useImperativeHandle,
  forwardRef,
  useLayoutEffect,
  useEffect,
  useId,
} from "react";
import { ButtonProps } from "../Button";
import { useDisclosure } from "../../../hooks/useDisclosure";
import { POPOVER_CLICK_TRIGGER_EVENT } from "./Popover.constants";
import { calculatePosition } from "./Popover.helper";
import {
  PopoverProps,
  PopoverPositionX,
  PopoverPositionY,
} from "./Popover.types";
import styles from "./Popover.module.css";
import React from "react";

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  (
    {
      content,
      trigger,
      className,
      placement = "bottom",
      sizeAsTrigger,
      onBlur,
      isOpen,
      onClose,
      onOpen,
    },
    ref
  ) => {
    const [positionY, setPositionY] = useState<PopoverPositionY | undefined>();
    const [positionX, setPositionX] = useState<PopoverPositionX | undefined>();

    const popoverHandler = useDisclosure();

    const id = useId();

    const isControlledFromParent = Boolean(
      typeof isOpen === "boolean" && onOpen && onClose
    );

    const open = isControlledFromParent ? onOpen : popoverHandler.onOpen;
    const close = isControlledFromParent ? onClose : popoverHandler.onClose;
    const isPopoverOpened = isControlledFromParent
      ? isOpen
      : popoverHandler.isOpen;

    const position =
      placement === "bottom" || placement === "top" ? positionY : positionX;

    const alignment =
      (placement === "bottom" || placement === "top" ? positionX : positionY) ||
      "center";

    const wrapperRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => wrapperRef.current as HTMLDivElement);

    const contentClassNames = [
      styles.popover_content,
      sizeAsTrigger ? styles[`popover_content--size-as-trigger`] : "",
      isPopoverOpened
        ? styles[`popover_content--opened`]
        : styles[`popover_content--hide`],
      styles[`popover_content--alignment-${alignment}`],
      position ? styles[`popover_content--position-${position}`] : "",
    ];

    const handleOnBlur: React.FocusEventHandler<HTMLDivElement> = (e) => {
      e.stopPropagation();

      if (!wrapperRef.current?.contains(e.relatedTarget)) {
        close?.();
        onBlur?.(e);
      }
    };

    const handleOnClick = () => {
      const clickTriggerEvent = new CustomEvent(POPOVER_CLICK_TRIGGER_EVENT, {
        detail: { id },
      });

      document.dispatchEvent(clickTriggerEvent);
    };

    useLayoutEffect(() => {
      if (isOpen) {
        const position = calculatePosition({
          contentRef,
          placement,
          triggerRef,
        });

        setPositionX(position.x);
        setPositionY(position.y);
        contentRef.current?.focus();
      }
    }, [isOpen, placement]);

    useEffect(() => {
      // @ts-expect-error event handling
      function handleOnToggle(event) {
        event.detail.id === id ? open?.() : close?.();
      }

      document.addEventListener(POPOVER_CLICK_TRIGGER_EVENT, handleOnToggle);

      return () =>
        document.removeEventListener(
          POPOVER_CLICK_TRIGGER_EVENT,
          handleOnToggle
        );
    }, [close, id, open]);

    return (
      <div
        ref={wrapperRef}
        onBlur={handleOnBlur}
        className={`${styles.popover_wrapper} ${className || ""}`}
        data-placement={position}
        data-alignment={alignment}
      >
        {React.isValidElement(trigger) &&
          React.cloneElement(trigger as React.ReactElement<ButtonProps>, {
            ...trigger.props,
            onClick: handleOnClick,
            ref: triggerRef,
            "aria-haspopup": "dialog",
            "aria-expanded": !!isOpen,
          })}

        <div
          ref={contentRef}
          role="dialog"
          aria-modal="true"
          className={contentClassNames.join(" ")}
          tabIndex={1}
        >
          {content}
        </div>
      </div>
    );
  }
);
