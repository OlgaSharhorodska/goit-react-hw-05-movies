import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout/layout';

const Home = lazy(() => import('../Pages/Home'));
const Movies = lazy(() => import('../Pages/Movies'));
const MoveDetails = lazy(() => import('Pages/MovieDetails/MoveDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:moviesId" element={<MoveDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to={'/'} />} />
      </Route>
    </Routes>
  );
};
