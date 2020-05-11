import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import TextStyles from 'helpers/TextStyles';
import Colors from 'helpers/Colors';

import DatePicker from 'react-native-datepicker';
import  strings  from 'localization';

const styles = StyleSheet.create({
  container: {
  flexDirection:"row",
   alignItems: 'center',
   justifyContent:'center',
   padding:16
}

});

const updateItem = poke => {
    setSearch(poke);
    setDisplay(false);
  };
const tomorrow = ()=>{
  var d = new Date();
  return d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() ;
}
const DatePickerInput = props =>
( <View style={styles.container}>
    <Text style={{width: 100}}>{props.inputTitle}</Text>

    <DatePicker
      style={{width: 200}}
      date={props.date} //initial date from state
      mode="date" //The enum of date, datetime and time
      placeholder="select date"
      format="YYYY-MM-DD"
      minDate={tomorrow()}
      // maxDate="01-01-2019"
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      customStyles={{
        dateIcon: {
          position: 'absolute',
          right: 0,
          top: 4,
          marginRight: 0
        },
        dateInput: {
          marginRight: 36
        }
      }}
      onDateChange={(date) => {props.dateChanged({date: date})}}
    />

  </View>)



export default React.memo(DatePickerInput);
