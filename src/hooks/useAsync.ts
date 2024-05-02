import { useReducer, useCallback } from 'react';
import { asyncReducer } from '../utils/asyncReducer';
import { AsyncHookReturn } from '../types';

export const useAsync = <Response, ErrorResponse>(): AsyncHookReturn => {
  const [state, dispatch] = useReducer(asyncReducer, {
    status: 'idle',
    data: null,
    error: null,
  });

  const run = useCallback(
    (promise: Promise<any>) => {
      if (promise === undefined) {
        return;
      }
      dispatch({ type: 'pending' });
      promise.then(
        (data) => {
          dispatch({ type: 'resolved', data });
        },
        (error) => {
          dispatch({ type: 'rejected', error });
        }
      );
    },

    []
  );
  return { ...state, run };
};
