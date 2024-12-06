import { useEffect } from "react";

export const useManageFocusableElements = (
  containerRef: React.RefObject<HTMLDivElement>,
  isEnabled: boolean
) => {
  useEffect(() => {
    if (!containerRef.current) return;

    const focusableElements =
      containerRef.current.querySelectorAll<HTMLElement>(
        'a, button, input, textarea, select, [tabindex]'
      );

    focusableElements.forEach((element) => {
      if (isEnabled) {
        element.removeAttribute('tabindex');
      } else {
        element.setAttribute('tabindex', '-1');
      }
    });
  }, [containerRef, isEnabled]);
};
