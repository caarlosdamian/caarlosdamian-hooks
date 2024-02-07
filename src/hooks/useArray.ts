import { useCallback, useState } from 'react';

export const useArray = <T>(initialArry: T[]) => {
  const [array, setArray] = useState(initialArry);

  const addElementAtTheEnd = useCallback((element: T) => {
    setArray((prev) => [...prev, element]);
  }, []);

  const addElementAtPosition = useCallback((element: T, position: number) => {
    const newArray = [...array];
    newArray.splice(position, 0, element);
    setArray(newArray);
  }, []);

  const removeElement = useCallback((element: T) => {
    const newArray = [...array];

    setArray(newArray);
    const elementIndex = newArray.indexOf(element);
    if (elementIndex > -1) {
      newArray.splice(elementIndex, 1);
      setArray(newArray);
    }
  }, []);

  const removeFirstElement = useCallback(() => {
    const newArr = [...array];
    newArr.shift();
    setArray(newArr);
  }, []);

  const removeLastElement = useCallback(() => {
    const newArr = [...array];
    newArr.pop();
    setArray(newArr);
  }, []);

  const resetArray = () => {
    setArray([]);
  };

  const replaceArray = useCallback((newArray: T[]) => {
    setArray(newArray);
  }, []);

  const getElementAtIndex = useCallback(
    (index: number): T | undefined => {
      return array[index];
    },
    [array]
  );

  return {
    array,
    addElementAtTheEnd,
    addElementAtPosition,
    removeElement,
    removeFirstElement,
    removeLastElement,
    resetArray,
    replaceArray,
    getElementAtIndex,
  };
};
