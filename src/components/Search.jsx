import { useGlobalContext } from '../context';

const Search = () => {
  const { setSearchQuery } = useGlobalContext();
  return (
    <div>
      <h1>Search</h1>
    </div>
  );
};

export default Search;
