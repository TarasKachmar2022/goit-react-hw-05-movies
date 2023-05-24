import profilePath from '../images/avatar.jpg';
const imagePath = 'https://image.tmdb.org/t/p/w500';
const defaultPath = profilePath;

const getProfilePath = urlPart => {
  if (urlPart) {
    return `${imagePath}${urlPart}`;
  }
  return defaultPath;
};

export default getProfilePath;
