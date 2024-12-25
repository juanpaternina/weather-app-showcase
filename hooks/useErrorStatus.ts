import { useCallback, useState } from 'react';

export const useErrorStatus = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const updateErrorState = useCallback(
    (isError: boolean, errorMessage?: string) => {
      if (isError && errorMessage) {
        setErrorMessage(errorMessage);
        setError(isError);
        return;
      }

      if (isError && !errorMessage) {
        setErrorMessage('Something went wrong');
      }

      setError(isError);
      setErrorMessage('');
    },
    [],
  );

  return { error, errorMessage, updateErrorState };
};
