import { useState } from 'react';
import { useEffectOnce } from './useEffectOnce';

interface CursorI {
  positionX: number;
  positionY: number;
}

export const useCursor = (): CursorI => {
  const [cursorPosition, setCursorPosition] = useState({
    positionX: 0,
    positionY: 0,
  });

  const handleMove = (e: MouseEvent) => {
    setCursorPosition({
      positionX: e.clientX,
      positionY: e.clientY,
    });
  };

  useEffectOnce(() => {
    window.addEventListener('mousemove', (e) => handleMove(e));
    return () => {
      window.removeEventListener('mousemove', (e) => handleMove(e));
    };
  });
  
  return cursorPosition;
};
