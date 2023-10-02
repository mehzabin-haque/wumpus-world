// Create a context to manage the 2D array state
import { ReactNode, createContext, useContext, useState } from 'react';

const ArrayContext = createContext<(string)[][]>([['']]);

interface DataProviderProps {
  children: ReactNode; // Annotate the children prop with ReactNode type
}

export function ArrayProvider({ children }) {
  const [data, setData] = useState([/* your data here */]);

  return (
    <ArrayContext.Provider value={{ data, setData }}>
      {children}
    </ArrayContext.Provider>
  );
}

export function useArray() {
  return useContext(ArrayContext);
}
