import { useCallback, MouseEvent } from 'react';
import { useTimer } from './useTimer';

type ClickCallback = (event: MouseEvent<any>) => any | void;

export const useDoubleClick = <T>(
  doubleClick: ClickCallback,
  click: ClickCallback,
  timeout = 250
) => {
  const { clearTimer, setTimer } = useTimer();

  return useCallback(
    (event: MouseEvent<T>) => {
      clearTimer();
      if (click && event.detail === 1) {
        setTimer(() => click(event), timeout);
      }
      if (event.detail % 2 === 0) {
        doubleClick(event);
        setTimer(() => doubleClick(event), timeout);
      }
    },
    [click, doubleClick, timeout]
  );
};
