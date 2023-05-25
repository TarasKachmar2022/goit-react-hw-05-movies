import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import routes from 'routes';
import Loader from './Loader/Loader';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const MoviesDetailsPage = lazy(() => import('pages/MoviesDetailsPage'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={routes.HOME} element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path={routes.MOVIES} element={<MoviesPage />} />
            <Route path={routes.MOVIES_DETAILS} element={<MoviesDetailsPage />}>
              <Route path={routes.MOVIES_CAST} element={<Cast />} />
              <Route path={routes.MOVIES_REVIEWS} element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
