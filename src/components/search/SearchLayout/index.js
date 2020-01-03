import React from 'react';
import PropTypes from 'prop-types';
import { Platform, StyleSheet, View } from 'react-native';
import SearchBar from '../SearchBar';
import SearchHeader from '../SearchHeader';

const DEFAULT_TINT_COLOR = Platform.OS === 'ios' ? '#007AFF' : '#000';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerList: {
    alignItems: 'center'
  }
});

export default class SearchLayout extends React.Component {
  static propTypes = {
    headerBackgroundColor: PropTypes.string,
    headerTintColor: PropTypes.string,
    searchInputPlaceholderTextColor: PropTypes.string,
    searchInputTextColor: PropTypes.string,
    searchInputSelectionColor: PropTypes.string,
    searchInputUnderlineColorAndroid: PropTypes.string,
    searchInputTintColor: PropTypes.string,
    renderResults: PropTypes.object,
    onChangeQuery: PropTypes.func,
    onSubmit: PropTypes.func,
    navigation: PropTypes.shape({
      goBack: PropTypes.func
    }),
    children: PropTypes.object
  }

  static defaultProps = {
    debounce: 500,
    headerBackgroundColor: '#fff',
    headerTintColor: DEFAULT_TINT_COLOR,
  };

  state = {
    q: '',
  };

  _handleSubmit = q => {
    this.props.onSubmit && this.props.onSubmit(q);
  };

  // TODO: debounce
  _handleChangeQuery = q => {
    this.props.onChangeQuery && this.props.onChangeQuery(q);
    this.setState({ q });
  };

  render() {
    return (
      <View style={styles.container}>
        <SearchHeader
          backgroundColor={this.props.headerBackgroundColor}
          tintColor={this.props.headerTintColor}
          backButton={Platform.OS === 'android'}>
          <SearchBar
            onChangeQuery={this._handleChangeQuery}
            onSubmit={this._handleSubmit}
            placeholderTextColor={this.props.searchInputPlaceholderTextColor}
            textColor={this.props.searchInputTextColor}
            selectionColor={this.props.searchInputSelectionColor}
            underlineColorAndroid={
              this.props.searchInputUnderlineColorAndroid ||
              this.props.headerBackgroundColor
            }
            tintColor={
              this.props.searchInputTintColor || this.props.headerTintColor
            }
          />
        </SearchHeader>
        <View style={styles.containerList}>
        {
          this.props.children
        }
        </View>
      </View>
    );
  }
}
