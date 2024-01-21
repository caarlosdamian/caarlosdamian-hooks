import { useState } from 'react';

export const useToggle = (defaultValue: boolean = false): [boolean, () => void] => {
  const [toggleValue, setToggleValue] = useState<boolean>(defaultValue);

  const handleToggle = () => {
    setToggleValue((prev) => !prev);
  };

  return [toggleValue, handleToggle];
};
