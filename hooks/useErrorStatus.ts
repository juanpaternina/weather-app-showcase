import { useCallback, useState } from 'react';

export const useErrorStatus = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const updateErrorState = useCallback(
    (isError: boolean, lErrorMessage?: string) => {
      if (isError) {
        setError(true);
        setErrorMessage(
          lErrorMessage || errorMessage || 'Something went wrong',
        );
      } else {
        setError(false);
        setErrorMessage('');
      }
    },
    [errorMessage],
  );

  return { error, errorMessage, updateErrorState };
};
