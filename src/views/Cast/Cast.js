import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchGetMovieCredits } from '../../services/filmApi';
import s from './Cast.module.css';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchGetMovieCredits(id).then(setCast);
  }, [id]);

  return (
    <>
      {cast && cast.cast.length === 0 && (
        <p>We don't have any cast for this movie</p>
      )}
      <ul className={s.cardList}>
        {cast &&
          cast.cast.map(item => (
            <li key={item.credit_id} className={s.movieCard}>
              <img
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/w300${item.profile_path}`
                    : `https://pixabay.com/get/g68da3d44c0cdd0d3f37381394d7c26cb4d605a22228ba5a0b9443c2001eebc8ce311a73747570bf4d5f798d922cd924a_1280.png`
                }
                alt={item.name}
                width="150px"
              />
              <h3>{item.name}</h3>
              <p>{'as'}</p>
              <p>{item.character}</p>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Cast;
