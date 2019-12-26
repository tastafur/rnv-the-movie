import { connect } from 'react-redux';

import ImageCache from './statelessWeb';

// Selectors
import { getBaseUrlImage } from '../../selectors/configuration';

const mapStateToProps = (state) => ({
  baseUrl: getBaseUrlImage(state.configuration)
});

export default connect(mapStateToProps, null)(ImageCache)
