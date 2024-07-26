import { RefObject, useState, useEffect, useCallback } from "react";
import { ELEMENT_SELECTOR } from "../../constants/selectors";
import { COMPONENT_NAME } from "../../constants/component-names";


/**
 * Private hook, used to handle overflow elements inside of other elements with 
 * overflowY as auto (like Drawer content). This hook allow display that element
 * when is opened for example Select, Datepicker, etc.
 */
export function useOverflow<T extends HTMLElement>(elementRef: RefObject<T>) {
  const [hasDrawerAsParent, setHasDrawerAsParent] = useState(false);

  const hideOverflow = useCallback(() => {
    if (!hasDrawerAsParent) return;

    const drawerElements: NodeListOf<HTMLElement> = document.querySelectorAll(
      ELEMENT_SELECTOR.DRAWER_CONTENT
    );

    drawerElements.forEach((el) => {
      el.style.overflowY = "auto";
    });
  }, [hasDrawerAsParent]);

  const displayOverflow = useCallback(() => {
    if (!hasDrawerAsParent) return;

    const drawerElements: NodeListOf<HTMLElement> = document.querySelectorAll(
      ELEMENT_SELECTOR.DRAWER_CONTENT
    );

    drawerElements.forEach((el) => {
      el.style.overflowY = "visible";
    });
  }, [hasDrawerAsParent]);

  const checkParent = useCallback(
    (
      node: HTMLElement | null,
      attributeName: string,
      attributeValue: string
    ) => {
      if (!node) return false;
      if (
        node.getAttribute &&
        node.getAttribute(attributeName) === attributeValue
      ) {
        return true;
      }
      return checkParent(node.parentElement, attributeName, attributeValue);
    },
    []
  );

  useEffect(() => {
    if (elementRef.current) {
      setHasDrawerAsParent(
        checkParent(elementRef.current, "data-component", COMPONENT_NAME.DRAWER)
      );
    }
  }, [checkParent, elementRef]);

  return { displayOverflow, hideOverflow };
}
