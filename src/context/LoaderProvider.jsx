import { createContext, useContext, useState } from "react";

export const LoaderContext = createContext();

console.log("LoaderContext :>> ", LoaderContext);

const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoaderContext.Provider value={setIsLoading}>
      {children}
      {isLoading && <h1>Loading...</h1>}
    </LoaderContext.Provider>
  );
};

export default LoaderProvider;

// const setIsLoading = useContext(LoaderContext)
