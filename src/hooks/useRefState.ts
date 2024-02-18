import { useRef } from 'react';

export const useRefState = () => {
  const ref = useRef(null);

  const setRef = (value: any) => {
    ref.current = value;
  };
  return {
    ref: ref.current,
    setRef,
  };
};
