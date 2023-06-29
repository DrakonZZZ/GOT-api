import { Link } from 'react-router-dom';

const Chracter = (data) => {
  return (
    <article className="character">
      <div className="img-container">
        <img src={data.imageUrl} alt={data.firstName} />
      </div>
      <div className="character-footer">
        <h3>{data.fullName}</h3>
        <h4>{data.title}</h4>
        <p>{data.family}</p>
        <Link
          to={`/character/${data.id}`}
          className="btn btn-primart btn-details"
        >
          Information
        </Link>
      </div>
    </article>
  );
};

export default Chracter;
