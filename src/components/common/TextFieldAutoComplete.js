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
  containerWrapper: {
    width:"80%",

  },
  container: {
    backgroundColor: Colors.grayLight,
    borderRadius:15,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20,
  },
  item: {
    padding:12,
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
    zIndex: 1,
    elevation: 1,
    left: 0
  },

});
//
// const updateItem = selectedItem => {
//     setSearch(selectedItem);
//     props.updateItem( selectedItem )
//     setDisplay(false);
//   };

const TextFieldAutoComplete = props =>
{
  console.log(props.data)
return <View style={styles.containerWrapper} >
  <View style={styles.container}>
    <TextInput
      {...props}
      onChangeText={props.textChanged}
      style={[TextStyles.textField, styles.field, props.style]}
      underlineColorAndroid="transparent"
    />
    </View>
      <View style={styles.autoContainer} >
      {(props.data && props.value.length > 0 && props.displayList ) &&
        props.data.filter(({ formatedName }) => formatedName.toLowerCase().indexOf(props.value.toLowerCase()) > -1)
        .map((value, i) => {
          return (
            <TouchableHighlight
              style={styles.item}
              key={value.id}
              onPressIn={() =>props.updateItem(value)}>
              <View>
                <Text >{value.first_name + ' '+value.last_name }</Text>
              </View>
            </TouchableHighlight>
          );
        })}
      </View>
  </View>
}

TextFieldAutoComplete.propTypes = {
  style: PropTypes.object,
};

TextFieldAutoComplete.defaultProps = {
  style: null,
};

export default React.memo(TextFieldAutoComplete);
