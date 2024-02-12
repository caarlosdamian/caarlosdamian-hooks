import { useState } from 'react';

type GenericObject = object;

export const useForm = (initialState: GenericObject) => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const watch = () => {
    return values;
  };

  return {
    handleChange,
    watch,
    values,
  };
};
