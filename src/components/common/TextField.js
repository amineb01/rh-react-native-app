import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
import TextStyles from 'helpers/TextStyles';
import Colors from 'helpers/Colors';

const styles = StyleSheet.create({
  container: {
    width:"80%",
    backgroundColor: Colors.grayLight,
    borderRadius:15,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20,

  },
  line: {
    backgroundColor: Colors.white,
    marginTop: 2,
    height: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
  },
  field: {
    alignSelf: 'stretch',
  },
});

const TextField = props => {
  console.log(props)
  return (<View style={styles.container}>
    <TextInput
      {...props}
      style={[TextStyles.textField, styles.field, props.style]}
      underlineColorAndroid="transparent"
    />
    <View style={styles.line} />
  </View>)
};

TextField.propTypes = {
  style: PropTypes.object,
};

TextField.defaultProps = {
  style: null,
};

export default React.memo(TextField);
