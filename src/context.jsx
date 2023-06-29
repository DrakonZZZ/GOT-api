import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

const url = 'https://thronesapi.com/api/v2/Characters';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isloading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('a');
  const [characters, setCharacters] = useState([]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const resData = await axios(url);
      console.log(resData);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <GlobalContext.Provider
      value={{
        isScroll,
        isloading,
        searchQuery,
        characters,
        setIsScroll,
        setIsLoading,
        setSearchQuery,
        setCharacters,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
