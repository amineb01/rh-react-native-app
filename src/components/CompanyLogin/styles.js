import { StyleSheet } from 'react-native';
import Colors from 'helpers/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  altagemLogo: {
    width:"80%",
    height: '40%'
  },

  btnContainer: {
    alignSelf: 'stretch',
    alignItems: 'center',
    alignContent: 'space-between',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  button: {
    backgroundColor: Colors.gray,
    width: '40%',
    height: 40
  }
});

export default styles;
