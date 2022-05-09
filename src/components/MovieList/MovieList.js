import Container from 'components/Container';
import { Link, useNavigate } from 'react-router-dom';
import s from './MoviesList.module.css';

const MoviesList = ({response}) => {
  const location = useNavigate();
  
  return (
    <Container>
    <ul className={s.movieList}>

      {response.results.map(movie =>(
        <li key={movie.id} className={s.movieCard}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                  : `https://pixabay.com/get/g68da3d44c0cdd0d3f37381394d7c26cb4d605a22228ba5a0b9443c2001eebc8ce311a73747570bf4d5f798d922cd924a_1280.png`
              }
              alt={movie.title}
              width="200px"
            />
            <h3 className={s.movieTitle}>{movie.title}</h3>
          </Link>
        </li>
      ))}

    </ul>
    </Container>
  );
};
export default MoviesList;