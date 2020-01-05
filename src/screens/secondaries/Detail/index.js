import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import Detail from './stateless';

// Selectors
import { getSize } from '../../../selectors/configuration';


const mapStateToProps = (state) => ({
  size: getSize(state.configuration),
  movies: state.movies,
  series: state.series,
  entertainmentSearch: state.entertainments
});

const mapDispatchToProps = dispatch => ({
  openVideo: () => dispatch(NavigationActions.navigate({
    routeName: 'PlayMovie'
  })),
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
