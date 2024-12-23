import { useState } from 'react';

export const useLoadingStatus = () => {
  const [loading, setLoading] = useState(false);

  const updateLoadingState = (isLoading: boolean) => {
    setLoading(isLoading);
  };

  return { loading, updateLoadingState };
};
