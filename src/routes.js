const routes = {
  HOME: '/',
  MOVIES: '/movies',
  MOVIES_DETAILS: '/movies/:movieId',
  STATIC_MOVIE_ID: id => '/movies/' + id,
  MOVIES_CAST: 'cast',
  // MOVIES_CAST: '/movies/:movieId/cast',
  // MOVIES_REVIEWS: '/movies/:movieId/reviews',
  MOVIES_REVIEWS: 'reviews',
  MOVIES_DEVELOPER: 'developer',
};

export default routes;
