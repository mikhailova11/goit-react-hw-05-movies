import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Container from "./components/Container";
import Cast from './views/Cast';
import Reviews from'./views/Reviews';
import { FaSpinner } from 'react-icons/fa';



const HomePageLazy = lazy(()=> import('./views/HomePage'));
const MoviesPageLazy = lazy(()=> import('./views/MoviesPage'));
const MovieDetailsPageLazy = lazy(()=> import('./views/MovieDetailsPage'));
const CastPageLazy = lazy(()=> import('./views/Cast'));
const ReviewsPageLazy = lazy(()=> import('./views/Reviews'));


const fallbackStyle = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 40,
  color: '#010101'
}

export const App = () => {
  return (
    <Container>

      <Navigation/>

      <Suspense fallback={<div style={fallbackStyle}><FaSpinner/></div>}>
        <Routes>
          <Route path="/" element={<HomePageLazy />} />
          <Route path="movies" element={<MoviesPageLazy />} />
          <Route path="movies/:id" element={<MovieDetailsPageLazy/>}>
            <Route path="cast" element={<CastPageLazy />} />
            <Route path="reviews" element={<ReviewsPageLazy />} />
          </Route>
          <Route path="*" element={<HomePageLazy />} />
        </Routes>
      </Suspense>

    </Container>
  );
};

export default App;