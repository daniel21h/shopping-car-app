import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 10,
    height: 270,
    borderColor: '#ccc',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 8,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  carTextName: {
    fontWeight: 'bold',
    fontSize: 25,
    margin: 10,
  },
  carButton: {
    backgroundColor: '#007ac1',
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
    margin: 6,
    borderRadius: 6,
  }
})