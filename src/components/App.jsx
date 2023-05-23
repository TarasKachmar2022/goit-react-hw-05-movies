import HomePage from 'pages/HomePage';
import MoviesDetailsPage from 'pages/MoviesDetailsPage';
import MoviesPage from 'pages/MoviesPage';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import routes from 'routes';

export const App = () => {
  return (
    <>
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
    </>
  );
};
