import { useCallback, useState } from 'react';

export const useLoadingStatus = () => {
  const [loading, setLoading] = useState(false);

  const updateLoadingState = useCallback((isLoading: boolean) => {
    setLoading(isLoading);
  }, []);

  return { loading, updateLoadingState };
};
