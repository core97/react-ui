import {
  useState,
  useRef,
  useEffect,
  useCallback,
  useImperativeHandle,
  forwardRef,
} from "react";
import { useOverflow } from "../../../hooks/useOverflow";
import {
  PopoverProps,
  PopoverPositionX,
  PopoverPositionY,
} from "./Popover.types";
import styles from "./Popover.module.css";

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  (
    {
      content,
      isOpen,
      onClose,
      trigger,
      className,
      placement = "bottom",
      sizeAsTrigger,
      onBlur,
    },
    ref
  ) => {
    const [positionY, setPositionY] = useState<PopoverPositionY | undefined>();
    const [positionX, setPositionX] = useState<PopoverPositionX | undefined>();
    const [isCalculated, setIsCalculated] = useState(false);

    const position =
      placement === "bottom" || placement === "top" ? positionY : positionX;

    const alignment =
      (placement === "bottom" || placement === "top" ? positionX : positionY) ||
      "center";

    const wrapperRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const { displayOverflow, hideOverflow } = useOverflow(wrapperRef);

    useImperativeHandle(ref, () => wrapperRef.current as HTMLDivElement);

    const contentClassNames = [
      styles.popover_content,
      sizeAsTrigger ? styles[`popover_content--size-as-trigger`] : "",
      isOpen && isCalculated ? styles[`popover_content--opened`] : "",
      isCalculated ? styles[`popover_content--alignment-${alignment}`] : "",
      isCalculated && position
        ? styles[`popover_content--position-${position}`]
        : "",
    ];

    const calculatePosition = useCallback(() => {
      const triggerRect = triggerRef.current?.getBoundingClientRect();
      const contentRect = contentRef.current?.getBoundingClientRect();

      if (triggerRect && contentRect) {
        const popoverHeight = contentRef.current?.offsetHeight ?? 0;
        const availableSpaceBelow = window.innerHeight - triggerRect.bottom;
        const availableSpaceAbove = triggerRect.top;

        if (availableSpaceBelow < popoverHeight) {
          setPositionY("top");
        } else if (availableSpaceAbove < popoverHeight) {
          setPositionY("bottom");
        } else {
          setPositionY(
            placement === "bottom" || placement === "top"
              ? placement
              : undefined
          );
        }

        const diffWidth = Math.abs(
          (contentRef.current?.offsetWidth ?? 0) -
            (triggerRef.current?.offsetWidth ?? 0)
        );

        const availableSpaceRight = window.innerWidth - triggerRect.right;
        const availableSpaceLeft = triggerRect.left;

        if (availableSpaceRight < diffWidth) {
          setPositionX("left");
        } else if (availableSpaceLeft < diffWidth) {
          setPositionX("right");
        } else {
          setPositionX(
            placement === "left" || placement === "right"
              ? placement
              : undefined
          );
        }

        setIsCalculated(true);
      }
    }, [placement]);

    const handleOnBlur: React.FocusEventHandler<HTMLDivElement> = (e) => {
      e.stopPropagation();

      if (!wrapperRef.current?.contains(e.relatedTarget)) {
        onClose();
        onBlur?.(e);
      }
    };

    useEffect(() => {
      if (isOpen) {
        calculatePosition();
        displayOverflow();
        contentRef.current?.focus();
      } else {
        hideOverflow();
      }
    }, [calculatePosition, displayOverflow, hideOverflow, isOpen]);

    return (
      <div
        ref={wrapperRef}
        onBlur={handleOnBlur}
        className={`${styles.popover_wrapper} ${className || ""}`}
        data-placement={position}
        data-alignment={alignment}
      >
        <div ref={triggerRef} aria-haspopup="dialog" aria-expanded={!!isOpen}>
          {trigger}
        </div>

        {isOpen && (
          <div
            ref={contentRef}
            role="dialog"
            aria-modal="true"
            className={contentClassNames.join(" ")}
            tabIndex={1}
          >
            {content}
          </div>
        )}
      </div>
    );
  }
);
