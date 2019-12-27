import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 75,
    width: 75,
    backgroundColor: 'blue',
    borderRadius: 100,
    position: 'absolute',
    top: (-75 / 2),
    right: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    height: 30,
    width: 30,
    marginLeft: 6
  }
});
