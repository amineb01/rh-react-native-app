import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import TextStyles from 'helpers/TextStyles';
import Colors from 'helpers/Colors';

const styles = StyleSheet.create({
  button: {
    width:"80%",
    backgroundColor:Colors.secondary,
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
});

const Button = props => {
  console.log('btnnnn')
return(  <TouchableOpacity
    {...props}
    style={[styles.button, props.style]}
  >
    <Text
      style={[TextStyles.lightTitle, props.textStyle]}
    >
      {props.title}
    </Text>
  </TouchableOpacity>
);
}

Button.propTypes = {
  style: PropTypes.object,
  textStyle: PropTypes.object,
  title: PropTypes.string,
};

Button.defaultProps = {
  style: null,
  textStyle: null,
  title: '',
};
export default React.memo(Button);
