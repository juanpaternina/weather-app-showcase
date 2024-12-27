import { useCallback, useState } from 'react';

export const useErrorStatus = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const updateErrorState = useCallback(
    (isError: boolean, lErrorMessage?: string) => {
      if (isError && errorMessage) {
        setErrorMessage(errorMessage);
        setError(isError);
        return;
      }

      if (isError && !lErrorMessage) {
        setErrorMessage('Something went wrong');
        return;
      }

      setError(isError);
      setErrorMessage('');
    },
    [],
  );

  return { error, errorMessage, updateErrorState };
};
