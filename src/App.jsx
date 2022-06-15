import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Container from "./components/Container";
import Cast from './views/Cast';
import Reviews from'./views/Reviews';
import { FaSpinner } from 'react-icons/fa';



const HomePageLazy = lazy(()=> import('./views/HomePage' /*webpackChunkName: "home-view" */));
const MoviesPageLazy = lazy(()=> import('./views/MoviesPage' /*webpackChunkName: "movie-view" */));
const MovieDetailsPageLazy = lazy(()=> import('./views/MovieDetailsPage' /*webpackChunkName: "movie-details-view" */));




export const App = () => {
  return (
    <Container>
       {  <FaSpinner/> && <Navigation/>}
      <Suspense fallback={<FaSpinner/>}>
     
        <Routes>
          <Route path="/" element={<HomePageLazy />} />
          <Route path="movies" element={<MoviesPageLazy />} />
          <Route path="movies/:id" element={  <FaSpinner/> && <MovieDetailsPageLazy/>}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          
          <Route path="*" element={<HomePageLazy />} />
        </Routes>
      </Suspense>

    </Container>
  );
};

export default App;