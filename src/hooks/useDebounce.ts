import { useEffect, useRef } from 'react';

export const useDebounce = <T extends any[]>(
  callback: (...args: T) => any,
  delay: number
) => {
  const callbackRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (callbackRef.current) {
        clearTimeout(callbackRef.current);
      }
    };
  }, []);

  const debouncedCallback = (...rest: T) => {
    if (callbackRef.current) {
      clearTimeout(callbackRef.current);
    }

    callbackRef.current = setTimeout(() => {
      callback(...rest);
    }, delay);
  };

  return debouncedCallback;
};
