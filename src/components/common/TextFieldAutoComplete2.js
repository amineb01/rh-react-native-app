import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  TouchableHighlight,
  View,
  Text,
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
    position: 'relative',
    zIndex: 9999,
    elevation: 999,

  },
  item: {
    padding:12,
    backgroundColor: Colors.red,
  },
  field: {
    alignSelf: 'stretch',
  },
  autoContainer: {
    position: 'absolute',
    backgroundColor: Colors.grayLight,
    width: '100%',
    top: 50,
    borderRadius:15,
    alignSelf: 'stretch',
    zIndex: 9999,
    elevation: 999,
    left: 0
  },

// border-width: 0px 1px 1px 1px;
// border-style: solid;
// border-color: goldenrod;
// background-color: whitesmoke;


});

const updateItem = poke => {
    setSearch(poke);
    setDisplay(false);
  };

const TextFieldAutoComplete = props =>
(<View style={styles.container}>
      <View style={styles.autoContainer} >
      <TouchableHighlight
        style={styles.item}
        onPressIn={() => console.log('You click by View')}>
        <View>
          <Text >sssss</Text>
        </View>
      </TouchableHighlight>
      </View>
      <TextInput
        {...props}
        onChangeText={props.textChanged}
        style={[TextStyles.textField, styles.field, props.style]}
        underlineColorAndroid="transparent"
       />
  </View>)


TextFieldAutoComplete.propTypes = {
  style: PropTypes.object,
};

TextFieldAutoComplete.defaultProps = {
  style: null,
};

export default React.memo(TextFieldAutoComplete);
