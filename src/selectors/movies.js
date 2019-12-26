export const getMovieCover = movies =>
  movies.map(movie => ({
    title: movie.title,
    subtitle: movie.overview,
    path: movie.poster_path
  }));
