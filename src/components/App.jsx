import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import routes from 'routes';
import Loader from './Loader';

const HomePage = lazy(() => import('pages/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const MoviesDetailsPage = lazy(() => import('pages/MoviesDetailsPage'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));
const DeveloperPage = lazy(() => import('pages/DeveloperPage'));
const NotFound = lazy(() => import('pages/NotFound'));

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
            <Route path={routes.MOVIES_DEVELOPER} element={<DeveloperPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};
