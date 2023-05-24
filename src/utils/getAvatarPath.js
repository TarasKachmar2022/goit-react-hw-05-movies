import avatarPath from '../images/avatar.jpg';
const imagePath = 'https://image.tmdb.org/t/p/w500';
const defaultPath = avatarPath;

const getAvatarPath = urlPart => {
  if (urlPart) {
    return `${imagePath}${urlPart}`;
  }
  return defaultPath;
};

export default getAvatarPath;
