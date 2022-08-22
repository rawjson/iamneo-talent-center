import { createContext, useState } from 'react';
import { initialData } from '../Boards/initData';

const DataContext = createContext();
const { Provider } = DataContext;

const DataProvider = ({ children }) => {
  const [data, setData] = useState(initialData);

  const reset = () => setData(initialData);

  return (
    <Provider
      value={{
        data,
        setData: (data) => setData(data),
        reset: () => reset(),
      }}
    >
      {children}
    </Provider>
  );
};

export { DataContext, DataProvider };
