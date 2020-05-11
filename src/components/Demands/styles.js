import { StyleSheet } from 'react-native';
import Colors from 'helpers/Colors';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  card:{
    padding: 10,
    margin: 10,
    backgroundColor:Colors.grayLight,
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  }
});

export default styles;
