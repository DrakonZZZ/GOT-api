import { useGlobalContext } from '../context';
import Character from './Chracter';
import Loading from './Loading';

const CharacterList = () => {
  const { characters, isloading } = useGlobalContext();

  if (isloading) {
    return <Loading />;
  }
  if (characters.length < 1) {
    return <h2 className="section-title">No Match Found!</h2>;
  }
  return <div>CharacterList</div>;
};

export default CharacterList;
