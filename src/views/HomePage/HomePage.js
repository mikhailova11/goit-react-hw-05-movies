// import s from './HomePages.module.css';
import PageHeading from 'components/PageHeading/PageHeading';
import MoviesList from "components/MovieList";
import { useEffect, useState } from 'react';
import {fetchPopularFilms} from 'services/filmApi'
import Container from 'components/Container';

const HomePages = () => {
    const [film, setFilm] = useState(null)

    useEffect(()=>{
        fetchPopularFilms().then(setFilm) 
    },[])

    return(
    <Container>
        <PageHeading>Popular Films</PageHeading>
        {film && <MoviesList response={film} />}
    </Container>
    )
}

export default HomePages;
