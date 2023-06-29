import { useRef } from 'react';
import { useGlobalContext } from '../context';

const Search = () => {
  const { characters, filterData, setFilterData } = useGlobalContext();
  const searchRef = useRef();

  const searchCharacter = () => {
    const newList = characters.filter((data) => {
      return data.fullName
        .toLowerCase()
        .includes(searchRef.current.value.toLowerCase());
    });
    setFilterData(newList);
  };
  return (
    <section className="search-section">
      <div className="input-field">
        <input
          type="text"
          className="search-input"
          ref={searchRef}
          onChange={searchCharacter}
        />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </section>
  );
};

export default Search;
