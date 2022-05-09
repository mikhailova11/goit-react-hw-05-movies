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
    <Navigation/>
    <Routes>
       
         <Route path="/" element={<HomePageLazy/>}/>
         <Route path="movies" element={<MoviesPageLazy/>}>
           <Route path=":id" element={<MovieDetailsPageLazy/>}>
            <Route path="cast" element={<CastLazy/>} />
            <Route path="reviews" element={<ReviewsLazy/>} />
          </Route>
         </Route>
         
         <Route path="*" element={<HomePageLazy/>}/>
  
    </Routes>
    </Suspense>
    </Container>
  );
};

export default App;