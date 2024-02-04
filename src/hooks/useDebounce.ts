import { useEffect } from 'react';
import { useTimer } from './useTimer';

export const useDebounce = <T extends any[]>(
  callback: (...args: T) => void,
  delay: number
) => {
  const { setTimer, clearTimer } = useTimer();

  useEffect(() => {
    return () => {
      clearTimer();
    };
  }, [clearTimer]);

  const debouncedCallback = (...args: T) => {
    clearTimer();
    setTimer(() => callback(...args), delay);
  };

  return debouncedCallback;
};
