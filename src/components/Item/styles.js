import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    height: 80,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    height: 80,
    width: 100,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  },
  description: {
    flex: 2,
    padding: 12,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  name: {
    color: '#444',
  },
  button: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
})