import React, { useCallback, useState, useEffect,useMemo } from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  Image,
  View,
  Text,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Button from '../common/Button';
import TextField from '../common/TextField';
import TextFieldAutoComplete from '../common/TextFieldAutoComplete';
import ErrorView from '../common/ErrorView';

import styles from './styles';

import ShadowStyles from 'helpers/ShadowStyles';
import TextStyles from 'helpers/TextStyles';
import errorsSelector from 'selectors/ErrorSelectors';
import { isLoadingSelector } from 'selectors/StatusSelectors';
import settingsSelectors from 'selectors/SettingsSelectors';
import companySelectors from 'selectors/CompanySelectors';

import strings from 'localization';
import { login, logout, actionTypes } from 'actions/UserActions';
import { _changeLanguage } from 'actions/SettingsActions';
import icon from 'assets/altagem-ok.png';
import techniciansSelectors from 'selectors/TechniciansSelectors';
function Login(props) {

  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [loginusername, setLoginUsername] = useState('');
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState(false);


  const isLoading = useSelector(state => isLoadingSelector([actionTypes.LOGIN], state));
  const errors = useSelector(state => errorsSelector([actionTypes.LOGIN], state));
  const { language } = useSelector(state => settingsSelectors(state));
  const company = useSelector(state => companySelectors(state));
  const techniciansList = useSelector(state => techniciansSelectors(state));
  const [techList, setTechList] = useState(techniciansList);


  const [lng, setLng] = useState(language || 'fr');

  const usernameChanged = useCallback(value => { setUsername(value); setDisplay(true)}, [setUsername]);
  const passwordChanged = useCallback(value => setPassword(value), [setPassword]);
  const loginUser = useCallback(() => (
    dispatch(login(loginusername, password, company.id ))), [ dispatch, loginusername, password]);
    const logoutUser = useCallback(() => (
      dispatch(logout( ))), [ dispatch]);
  const enVersion = useCallback(value => setLng('en'), [setLng]);
  const frVersion = useCallback(() => setLng('fr'), [setLng]);

  const handelUpdateItem = useCallback(value => {
    setDisplay(false)
    setLoginUsername(value.username)
    setUsername(value.first_name+' '+value.last_name)
  }, []);

  const technicians = useMemo(() => {   return techList.map(obj=> ({ ...obj, formatedName:  obj.first_name+' '+obj.last_name  }))  }, [techList]);


  // const usernameChanged = useCallback(value => setUsername(value), [setUsername]);
  // const usernameChanged = useCallback(value => setUsername(value), [setUsername]);

  //
  // useEffect(() => {
  //    setTechList(techList)
  // },[techList])

  useEffect(() => {
    dispatch(_changeLanguage(lng))
    strings.setLanguage(lng);
  },[lng]);

  const { navigation } = props;
  navigation.setOptions({ headerShown: false });

  return (
    <View style={styles.container}>
      <Image  style={styles.altagemLogo}
              source={icon}
              PlaceholderContent={<ActivityIndicator />}
      />
      <Text>{lng}</Text>
      <View style={styles.btnContainer}>
        <Button style={styles.button}
          onPress={frVersion}
          title='francais'
        />
        <Button style={styles.button}
          onPress={enVersion}
          title='anglais'
        />
      </View>
      <View style={styles.formContainer} >

        <Text style={TextStyles.fieldTitle}>
          {strings.username}
        </Text>
          <TextFieldAutoComplete
            displayList={display}
            updateItem={handelUpdateItem}
            value={username}
            data={technicians}
            textChanged={usernameChanged}
          />
        <Text style={TextStyles.fieldTitle}>
          {strings.password}
        </Text>
        <TextField
          placeholder={strings.password}
          value={password}
          onChangeText={passwordChanged}
          secureTextEntry
        />
        <View style={{ width: '80%' }}>
          <ErrorView errors={errors}  />
        </View>

        <Button
          title={isLoading ? strings.loading : strings.login}
          onPress={loginUser}
        />
      </View>

    </View>
  );
}

Login.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default React.memo(Login);
