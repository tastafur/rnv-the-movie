import { connect } from 'react-redux';

import { NavigationActions } from 'react-navigation';

import Search from './stateless'

// Utils
import { unNormalizeState } from '../../utils/commons';

// Actions
import { fetchSearch } from '../../actions/search';

// Selectors
import { getEntertainmentCover, filterForEntertainment } from '../../selectors/search';
import { getSize } from '../../selectors/configuration';

const mapStateToProps = (state) => ({
  entertainments: getEntertainmentCover(filterForEntertainment(unNormalizeState(state.entertainments))),
  size: getSize(state.configuration)
});

const mapDispatchToProps = dispatch => ({
  openDetailsEntertainment: id => dispatch(NavigationActions.navigate({
    routeName: 'Detail',
    params: {
      id
    }
  })),
  fetchSearch: (query) => dispatch(fetchSearch(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search)
