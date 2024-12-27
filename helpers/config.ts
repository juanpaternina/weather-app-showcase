const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

export const getAPIKey = () => {
  if (API_KEY === '' || API_KEY === undefined) {
    throw new Error('API_KEY is not defined');
  }
  return API_KEY;
};
