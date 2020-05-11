import React, { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import TextField from '../common/TextField';
import DatePickerInput from '../common/datePickerInput';

import {
  View,
  Text,
} from 'react-native';

import styles from './styles';

import Button from '../common/Button';

import TextStyles from 'helpers/TextStyles';
import  strings  from 'localization';
import getUser from 'selectors/UserSelectors';
import { addDemandToList } from 'actions/DemandsActions';

const Home = ({ navigation }) => {
  const [description, setDescription] = useState('');
  const [dd, setdD] = useState('');
  const [df, setdF] = useState('');
  const [disabled, setDisabled] = useState(true);

  const user = useSelector(state => getUser(state));
  const dispatch = useDispatch();
  const descriptionChanged = useCallback(value => setDescription(value), [setDescription]);
  const ddChanged = useCallback(value => setdD(value.date), [setdD]);
  const dfChanged = useCallback(value => setdF(value.date), [setdF]);
  const addDemand = () => dispatch( addDemandToList( {description, dd, df} ))

   useEffect(() => {

     setDisabled( !(description.length > 1 &&  dd.length > 6 &&  df.length > 6) )
   },[description, dd, df]);


  return (
    <View style={styles.container}>
      <Text style={styles.title} >{disabled+"" }</Text>

      <TextField
        placeholder={strings.homeScreen.description}
        value={description}
        onChangeText={descriptionChanged}
      />
      <DatePickerInput
        date={dd}
        dateChanged={ddChanged}
        inputTitle = {strings.homeScreen.dd}
      />
      <DatePickerInput
        date={df}
        dateChanged={dfChanged}
        inputTitle = {strings.homeScreen.df}
      />
      <Button
       title={strings.homeScreen.addBtn}
       onPress={ addDemand}
       disabled={disabled }
       // style={{backgroundColor:'red'}}
       // onPress={() => navigation.navigate('Todos')}
     />

    </View>
  );
};

export default Home;
