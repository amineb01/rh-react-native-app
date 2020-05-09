import { StyleSheet } from 'react-native';
import Colors from 'helpers/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginHorizontal: 40,
    padding: 20,
    width: '100%',
  },
  btnContainer: {
    alignSelf: 'stretch',
    alignItems: 'center',
    alignContent: 'space-between',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  altagemLogo: {
    width:"80%",
    height: '20%'
  },
  textError: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.red
  },
  button: {
    backgroundColor: Colors.red,
    width: '40%',
    height: 40
  }
});

export default styles;
