import posterPath from '../images/poster.jpg';
const imagePath = 'https://image.tmdb.org/t/p/w500';
const defaultPath = posterPath;

const getPosterPath = urlPart => {
  if (urlPart) {
    return `${imagePath}${urlPart}`;
  }
  return defaultPath;
};

export default getPosterPath;
