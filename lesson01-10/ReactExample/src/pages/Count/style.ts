import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50,
  },
  formContainer: {
    width: '90%',
    height: '50%',
    backgroundColor: '#d9d9d9',
    borderRadius: 10,
    marginTop: 60,
  },
  inputContainer: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 30,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#000',
    borderRadius: 5,
    paddingLeft: 10,
    backgroundColor: '#fff',
    fontSize: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 'auto',
    alignItems: 'center',
    width: '80%',
    marginTop: 20,
    gap: 10
  },

});
