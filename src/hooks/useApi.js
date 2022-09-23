import { useCallback, useState } from "react";

export const useApi = (initialValue, cbApi) => {
  const [data, setData] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getDataApi = async (options) => {
    setIsLoading(true);
    try {
      const responseData = await cbApi(options);
      //   setData(responseData);
      return responseData;
    } catch (error) {
      setError({
        error,
        notify: { message: error.message, status: "error" },
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const resetError = useCallback(() => setError(null), []);

  return { data, isLoading, error, getDataApi, setError, resetError, setData };
};

// const todoApi = useApi([]); // -> {data, isLoading, error}
// const newsApi = useApi([])
// const movieCardApi = useApi(null);
