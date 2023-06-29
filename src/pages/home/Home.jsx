import CharacterList from '../../components/CharacterList';
import Search from '../../components/Search';
import './home.css';

const Home = () => {
  return (
    <main>
      <Search />
      <CharacterList />
    </main>
  );
};

export default Home;
