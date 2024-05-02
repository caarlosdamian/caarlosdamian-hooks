import { useEffectOnce } from './useEffectOnce';
import { useAsync } from './useAsync';
import { FetchI } from '../types';



export const useFetch = ({ url, method = 'GET', body, headers }: FetchI) => {
  const { run, status, data, error } = useAsync();

  useEffectOnce(() => {
    run(
      fetch(url, {
        body: body ? JSON.stringify(body) : undefined,
        headers,
        method,
      })
        .then((response) => response.json())
        .catch((error) => error)
    );
  });

  return {
    isLoading: status === 'pending',
    isError: status === 'rejected',
    error: error,
    data,
  };
};
