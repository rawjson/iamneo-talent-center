import { createContext, useState } from 'react';
import { initialData } from '../initData';

const DataContext = createContext();
const { Provider } = DataContext;

const DataProvider = ({ children }) => {
  const [data, setData] = useState(initialData);

  return (
    <Provider
      value={{
        data,
        setData: (data) => setData(data),
      }}
    >
      {children}
    </Provider>
  );
};

export { DataContext, DataProvider };
