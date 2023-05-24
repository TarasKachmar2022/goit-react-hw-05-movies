const getGenresByName = data => data.map(genre => genre.name).join(', ');

export default getGenresByName;
