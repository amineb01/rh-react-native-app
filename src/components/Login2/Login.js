import React, { useCallback, useState, useEffect } from 'react';
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
import { getTechniciansList } from 'actions/TechniciansActions';

import { login, actionTypes } from 'actions/UserActions';
import { _changeLanguage } from 'actions/SettingsActions';
import icon from 'assets/altagem-ok.png';
import techniciansSelectors from 'selectors/TechniciansSelectors';
function Login(props) {

  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [companyId, setCompanyId] = useState('');
  const [display, setDisplay] = useState('');


  const isLoading = useSelector(state => isLoadingSelector([actionTypes.LOGIN], state));
  const errors = useSelector(state => errorsSelector([actionTypes.LOGIN], state));
  const { language } = useSelector(state => settingsSelectors(state));
  const company = useSelector(state => companySelectors(state));
  const techniciansList = useSelector(state => techniciansSelectors(state));

  const [lng, setLng] = useState(language || 'fr');



  const loginUser = useCallback(() => (
    dispatch(login(username, password))), [username, password, dispatch]);

  const getTechnicians = useCallback(() => (
    dispatch(getTechniciansList( company.id ))), [ dispatch]);

  useEffect(() => {
    dispatch(_changeLanguage(lng))
    strings.setLanguage(lng);
  },[lng]);

  useEffect(() => {
      if (company)  getTechnicians( )
  },[]);

  const passwordChanged = useCallback(value => setPassword(value), []);
  const usernameChanged = useCallback(value => setUsername(value), []);
  const updateItem = value => {
    console.log(value)
    setUsername(value)
  }

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
          onPress={()=>setLng('fr')}
          title='francais'
        />
        <Button style={styles.button}
          onPress={()=>setLng('en')}
          title='anglais'
        />
      </View>
      <View style={styles.formContainer} >
        <Text style={TextStyles.fieldTitle}>
          {strings.username}
        </Text>
        {techniciansList &&
          <TextFieldAutoComplete
            value={username}
            textChanged={usernameChanged}
            data={techniciansList}
            updateItem={updateItem}

          />
        }
        <Text style={TextStyles.fieldTitle}>
          {strings.password}
        </Text>
        <TextField
          placeholder={strings.password}
          value={password}
          onChangeText={passwordChanged}
          secureTextEntry
        />
        <ErrorView errors={errors} />
        <Button
          onPress={loginUser}
          title={isLoading ? strings.loading : strings.login}
        />
      </View>
    </View>
  );
}

Login.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Login;
