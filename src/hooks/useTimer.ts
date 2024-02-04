import { useCallback, useRef } from 'react';

export const useTimer = () => {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const setTimer = useCallback((callback: () => void, delay: number) => {
    clearTimer();
    timerRef.current = setTimeout(callback, delay);
  }, []);

  const clearTimer = useCallback(() => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  return { setTimer, clearTimer };
  
};
