import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';

import Card from '../../components/Card';

import SearchLayout from '../../components/search/SearchLayout';

export default class Search extends React.Component {
  static propTypes = {
    entertainments: PropTypes.array,
    fetchSearch: PropTypes.func,
    openDetailsEntertainment: PropTypes.func,
    size: PropTypes.string,
    navigation: PropTypes.shape({
      navigate: PropTypes.func
    })
  }

  static navigationOptions = {
    header: null,
  };

  state = {
    searchText: null,
  };

  handleQueryChange = searchText => {
    if(searchText)
      this.props.fetchSearch(searchText);

    this.setState({ searchText });
  };

  executeSearch = () => {
    const { searchText } = this.state;
    if(searchText)
      this.props.fetchSearch(searchText)
  };

  render() {
    const { entertainments, size, openDetailsEntertainment } = this.props

    return (
      <SearchLayout
        onChangeQuery={this.handleQueryChange}
        onSubmit={this.executeSearch}>
        {entertainments.length > 0 ? (
          <FlatList
            data={entertainments}
            renderItem={({ item, index }) => <Card key={index} size={size} onPress={openDetailsEntertainment} data={item} even={(index + 1) % 2 === 0} />}
            keyExtractor={ (item, index) => index.toString() }
          />) : null}
      </SearchLayout>
    );
  }
}
