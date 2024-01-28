import { useState } from 'react';
import { useEffectOnce } from './useEffectOnce';

interface FetchI {
  url: string;
  method?: string;
  body?: { [key: string]: any };
  headers?: { [key: string]: any };
}

export const useFetch = ({ url, method = 'GET', body, headers }: FetchI) => {
  const [data, setData] = useState<null | any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | any>(null);
  const [isError, setIsError] = useState<boolean>(false);

  const fetchData = async () => {
    setData(null);
    setIsLoading(true);
    setIsError(false);
    try {
      const information = await fetch(url, {
        body: body ? JSON.stringify(body) : undefined,
        headers,
        method,
      });
      const response = await information.json();
      setData(response);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffectOnce(() => {
    fetchData();
  });

  return {
    isLoading,
    data,
    error,
    isError,
  };
};
