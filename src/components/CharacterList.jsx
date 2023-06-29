import { useGlobalContext } from '../context';
import Character from './Chracter';
import Loading from './Loading';

const CharacterList = () => {
  const { filterData, isloading } = useGlobalContext();
  if (isloading) {
    return <Loading />;
  }
  if (filterData.length < 1) {
    return <h2 className="section-title">No Match Found!</h2>;
  }
  return (
    <section className="character-section">
      <h2 className="section-title">Characters</h2>
      <div className="character-center">
        {filterData.map((data) => {
          return <Character key={data?.id} {...data} />;
        })}
      </div>
    </section>
  );
};

export default CharacterList;
