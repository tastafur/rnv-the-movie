import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    height: '35%',
    width: '100%',
    paddingTop: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  title: {
    paddingHorizontal: 30,
    color: 'rgba(0, 0, 0, 0.9)',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left'
  },
  subtitle: {
    marginTop: 5,
    paddingHorizontal: 30,
    color: 'rgba(0, 0, 0, 0.75)',
    fontSize: 18,
    textAlign: 'left'
  },
});
