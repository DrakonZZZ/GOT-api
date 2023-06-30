import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

const url = 'https://thronesapi.com/api/v2/Characters';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isloading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('a');
  const [characters, setCharacters] = useState([]);
  const [filterData, setFilterData] = useState([]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const resData = await fetch(url);
      const parsedData = await resData.json();

      if (parsedData) {
        setCharacters(parsedData);
        setFilterData(parsedData);
      } else {
        setCharacters([]);
      }

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      throw new Error(error);
    }
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
        filterData,
        setFilterData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
