import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';

import SearchLayout from '../../components/search/SearchLayout';

export default class Search extends React.Component {
  static propTypes = {
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

  _handleQueryChange = searchText => {
    this.setState({ searchText });
  };

  _executeSearch = () => {
    alert('do search!');
  };

  render() {
    let { searchText } = this.state;

    return (
      <SearchLayout
        onChangeQuery={this._handleQueryChange}
        onSubmit={this._executeSearch}>
        {searchText ? (
          <RectButton
            style={{
              borderBottomWidth: StyleSheet.hairlineWidth,
              borderBottomColor: '#eee',
              paddingVertical: 20,
              paddingHorizontal: 15,
            }}
            onPress={() =>
              this.props.navigation.navigate('Result', {
                text: this.state.searchText,
              })
            }>
            <Text style={{ fontSize: 14 }}>{searchText}!</Text>
          </RectButton>
        ) : null}
      </SearchLayout>
    );
  }
}
