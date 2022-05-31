import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Container from "./components/Container";
import Cast from './views/Cast';
import Reviews from'./views/Reviews';

const HomePageLazy = lazy(()=> import('./views/HomePage'));
const MoviesPageLazy = lazy(()=> import('./views/MoviesPage'));
const MovieDetailsPageLazy = lazy(()=> import('./views/MovieDetailsPage'));




export const App = () => {
  return (
    <Container>
      <Navigation path="goit-react-hw-05-movies/"/>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route  path="/" element={<HomePageLazy />} />
          <Route path="movies" element={<MoviesPageLazy />} />
          <Route path="movies/:id" element={<MovieDetailsPageLazy />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>

    </Container>
  );
};

export default App;