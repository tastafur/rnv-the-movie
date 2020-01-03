export const getEntertainmentContent = (entertainment, id) => {
  return(entertainment.movies[id] || entertainment.series[id] || entertainment.entertainmentSearch[id] || null);
};

export const getFieldsMainEntertainment = item => ({
  id: (item.id || null),
  title: (item.title || item.name || null),
  subtitle: (item.overview || null),
  path: (item.poster_path || item.backdrop_path || null)
});
