export const getSerieCover = series =>
  series.map(serie => ({
    title: serie.name,
    subtitle: serie.overview,
    path: serie.poster_path || serie.backdrop_path
  }));
