import genreTable from './genreTable';

function getGenres(data) {
  return data
    .map(element => {
      return genreTable.find(el => el.id === element);
    })
    .map(el => el.name)
    .join(', ');
}

export default getGenres;
