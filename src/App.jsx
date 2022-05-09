import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Container from "./components/Container";

const HomePageLazy = lazy(()=> import('./views/HomePage'));
const MoviesPageLazy = lazy(()=> import('./views/MoviesPage'));
const MovieDetailsPageLazy = lazy(()=> import('./views/MovieDetailsPage'));
const CastLazy = lazy(()=> import('./views/Cast'));
const ReviewsLazy = lazy(()=> import('./views/Reviews'));



export const App = () => {
  return (
    <Container>
    <Suspense fallback={<div>Load...</div>}>
    <Navigation />

        <Routes>
          <Route exact path="/" element={<HomePageLazy />} />
          <Route path="/movies" element={<MoviesPageLazy />} />
          <Route path="/movies/:id" element={<MovieDetailsPageLazy />}>
            <Route path="/movies/:id/cast" element={<CastLazy />} />
            <Route path="/movies/:id/reviews" element={<ReviewsLazy />} />
          </Route>
        </Routes>
      </Suspense>

    </Container>
  );
};

export default App;