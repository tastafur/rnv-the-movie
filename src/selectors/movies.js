import { getFieldsMainEntertainment } from './commons';
export const getMovieCover = movies =>
  movies.map(movie => getFieldsMainEntertainment(movie));
