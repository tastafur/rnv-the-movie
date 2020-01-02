import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import SearchBar from '../SearchBar';
import SearchHeader from '../SearchHeader';

const DEFAULT_TINT_COLOR = Platform.OS === 'ios' ? '#007AFF' : '#000';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class SearchLayout extends React.Component {
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

        {this.props.renderResults
          ? this.props.renderResults(this.state.q)
          : this.props.children}
      </View>
    );
  }
}
