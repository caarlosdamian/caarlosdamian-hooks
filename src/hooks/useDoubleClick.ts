import { useCallback, useRef, MouseEvent } from 'react';

type ClickCallback = (event: MouseEvent<any>) => any | void;

export const useDoubleClick = <T>(
  doubleClick: ClickCallback,
  click: ClickCallback,
  timeout = 250
) => {
  const clickTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  );

  const clearClickTimeout = () => {
    if (clickTimeout.current !== undefined) {
      clearTimeout(clickTimeout.current);
      clickTimeout.current = undefined;
    }
  };

  return useCallback(
    (event: MouseEvent<T>) => {
      clearClickTimeout();
      if (click && event.detail === 1) {
        clickTimeout.current = setTimeout(() => {
          click(event);
        }, timeout);
      }
      if (event.detail % 2 === 0) {
        doubleClick(event);
      }
    },
    [click, doubleClick, timeout]
  );
};
