import { connect } from 'react-redux';

import Main from './stateless'
import { fetchMovies } from '../../actions/movies';
import { fetchSeries } from '../../actions/series';

const mapDispatchToProps = dispatch => ({
  fetchMovies: () => dispatch(fetchMovies()),
  fetchSeries: () => dispatch(fetchSeries()),
});

export default connect(null, mapDispatchToProps)(Main)
