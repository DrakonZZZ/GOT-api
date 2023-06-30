import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import { useEffect, useState } from 'react';
import './detail.css';

const Detail = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [character, setCharacter] = useState(null);
  const url = 'https://thronesapi.com/api/v2/Characters/';

  useEffect(() => {
    setIsLoading(true);
    const fetchCharData = async () => {
      try {
        const resData = await fetch(`${url}${id}`);
        const parsedData = await resData.json();
        if (parsedData) {
          setCharacter(parsedData);
        } else {
          setCharacter(null);
        }
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        throw new Error(error);
      }
    };

    fetchCharData();
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  if (!character) {
    return <h2>No Character Data Found!</h2>;
  }

  return (
    <section className="section char-section">
      <h2 className="section-title">{character.fullName}</h2>
      <div className="char">
        <img src={character.imageUrl} alt={character.fullName} loading="lazy" />
        <div className="char-info">
          <p>
            <span className="char-data">Id</span>
            {character.id}
          </p>
          <p>
            <span className="char-data">Name</span>
            {character.fullName}
          </p>
          <p>
            <span className="char-data">Family</span>
            {character.family}
          </p>
          <p>
            <span className="char-data">Title</span>
            {character.title}
          </p>
          <p>
            <span className="char-data">Name</span>
            {character.fullName}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Detail;
