import React, { useState, useEffect, useRef } from 'react';

type SerializeFunction<T> = (value: T) => string;
type DeserializeFunction<T> = (value: string) => T;

type useLocaleStorageOptions<T> = {
  serialize?: SerializeFunction<T>;
  deserialize?: DeserializeFunction<T>;
};

export const useLocaleStorage = <T>(
  key: string,
  defaultValue: T | (() => T),
  {
    serialize = JSON.stringify,
    deserialize = JSON.parse,
  }: useLocaleStorageOptions<T> = {}
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [state, setState] = useState<T>(() => {
    const valueInLocalStorage = window.localStorage.getItem(key);
    if (valueInLocalStorage !== null) {
      return deserialize(valueInLocalStorage);
    }
    return typeof defaultValue === 'function'
      ? (defaultValue as () => T)()
      : defaultValue;
  });

  const prevKeyRef = useRef<string | null>(null);

  useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey && prevKey !== key) {
      window.localStorage.removeItem(prevKey);
    }
    prevKeyRef.current = key;
    window.localStorage.setItem(key, serialize(state));
  }, [key, state, serialize]);

  return [state, setState];
};
