import { useCallback, useState } from 'react';

export const useSlider = <T>(arr: T[]) => {
  const [actualPosition, setActualPosition] = useState(0);

  const goNext = useCallback(() => {
    setActualPosition(prev => (prev === arr.length - 1 ? 0 : prev + 1));
  }, [arr.length]);

  const goPrevius = useCallback(() => {
    setActualPosition(prev => (prev === 0 ? arr.length - 1 : prev - 1));
  }, [arr.length]);

  return {
    goPrevius,
    goNext,
    actualPosition,
  };
};