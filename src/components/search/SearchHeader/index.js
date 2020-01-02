import React from 'react';
import { Animated, Platform, StatusBar, StyleSheet, View } from 'react-native';
import { withNavigation, HeaderBackButton } from 'react-navigation';
import { isIphoneX } from 'react-native-iphone-x-helper'
import PropTypes from "prop-types";

// @todo: make this work properly when in landscape
const hasNotch = isIphoneX();

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 50 : 56;
const TITLE_OFFSET = Platform.OS === 'ios' ? 70 : 56;

// @todo: this is static and we don't know if it's visible or not on iOS.
// need to use a more reliable and cross-platform API when one exists, like
// LayoutContext.
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? (hasNotch ? 40 : 25) : StatusBar.currentHeight;


class SearchHeader extends React.PureComponent {
  static HEIGHT = APPBAR_HEIGHT + STATUSBAR_HEIGHT;

  static propTypes = {
    backButton: PropTypes.bool,
    backButtonTitle: PropTypes.string,
    cancelButtonText: PropTypes.string,
    tintColor: PropTypes.string,
    backButtonTruncatedTitle: PropTypes.string,
    backButtonTitleStyle: PropTypes.object,
    backgroundColor: PropTypes.string,
    navigation: PropTypes.shape({
      goBack: PropTypes.func
    }),
    children: PropTypes.object
  }

  _navigateBack = () => {
    this.props.navigation.goBack(null);
  };

  _maybeRenderBackButton = () => {
    if (!this.props.backButton) {
      return;
    }

    return (
      <HeaderBackButton
        onPress={this._navigateBack}
        pressColorAndroid={this.props.tintColor || '#fff'}
        tintColor={this.props.tintColor}
        title={this.props.backButtonTitle || null}
        truncatedTitle={this.props.backButtonTruncatedTitle || null}
        titleStyle={this.props.backButtonTitleStyle || null}
      />
    );
  };

  render() {
    let headerStyle = {};
    if (this.props.backgroundColor) {
      headerStyle.backgroundColor = this.props.backgroundColor;
    }

    return (
      <Animated.View style={[styles.container, headerStyle]}>
        <View style={styles.appBar}>
          <View style={[StyleSheet.absoluteFill, styles.header]}>
            {this._maybeRenderBackButton()}
            {this.props.children}
          </View>
        </View>
      </Animated.View>
    );
  }
}

let platformContainerStyles;
if (Platform.OS === 'ios') {
  platformContainerStyles = {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#A7A7AA',
  };
} else {
  platformContainerStyles = {
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowRadius: StyleSheet.hairlineWidth,
    shadowOffset: {
      height: StyleSheet.hairlineWidth,
    },
    elevation: 4,
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: STATUSBAR_HEIGHT,
    height: STATUSBAR_HEIGHT + APPBAR_HEIGHT,
    ...platformContainerStyles,
  },
  appBar: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  title: {
    bottom: 0,
    left: TITLE_OFFSET,
    right: TITLE_OFFSET,
    top: 0,
    position: 'absolute',
    alignItems: Platform.OS === 'ios' ? 'center' : 'flex-start',
  },
  left: {
    left: 0,
    bottom: 0,
    top: 0,
    position: 'absolute',
  },
  right: {
    right: 0,
    bottom: 0,
    top: 0,
    position: 'absolute',
  },
});

export default withNavigation(SearchHeader)
