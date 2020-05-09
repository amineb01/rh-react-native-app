import React, { useCallback, useState, useEffect } from 'react';
import {
  ActivityIndicator,
  View,
  Image
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Button from '../common/Button';
import TextField from '../common/TextField';
import ErrorView from '../common/ErrorView';
import styles from './styles';

import errorsSelector from 'selectors/ErrorSelectors';
import { isLoadingSelector } from 'selectors/StatusSelectors';
import settingsSelectors from 'selectors/SettingsSelectors';
import companySelectors from 'selectors/CompanySelectors';
import { getTechniciansList } from 'actions/TechniciansActions';

import strings from 'localization';
import test from 'localization';

import { connectCompany, actionTypes } from 'actions/CompanyActions';

import icon from 'assets/altagem-ok.png';
import techniciansSelectors from 'selectors/TechniciansSelectors';

function CompanyLogin(props) {

  const [companyKey, setCompanyKey] = useState('');

  const isLoading = useSelector(state => isLoadingSelector([actionTypes.COMPANY], state));
  const errors = useSelector(state => errorsSelector([actionTypes.COMPANY], state));
  const _company = useSelector(state => companySelectors(state));
  const techniciansList = useSelector(state => techniciansSelectors(state));

  // const settings = useSelector(state => settingsSelectors(state));
  // const [language, setLanguage] = useState(settings);

  useEffect(() => {
    if (_company && techniciansList.length > 0 ) {
      props.navigation.navigate('Login');
    }
  },[techniciansList]);

  const dispatch = useDispatch();

  const connect = useCallback(() => (
    dispatch(connectCompany(companyKey))), [ dispatch, companyKey]);


  // useEffect(() => {
  //   strings.setLanguage(language);
  // },[language]);

  //
  // const passwordChanged = useCallback(value => setPassword(value), []);


  const companyKeyChanged = useCallback(value => setCompanyKey(value), [setCompanyKey]);

  const { navigation } = props;
  navigation.setOptions({ headerShown: false });

  return (
    <View style={styles.container}>
    <Image  style={styles.altagemLogo}
            source={icon}
            PlaceholderContent={<ActivityIndicator />}
    />
    <TextField

      placeholder={strings.companyScreen.companyKey}
      onChangeText={companyKeyChanged}
      value={companyKey}
      placeholderTextColor="#003f5c"
      />

    <ErrorView errors={errors} />
    <Button
      onPress={connect }
      title={isLoading ? strings.loading : strings.companyScreen.connect}
    />
    </View>


  );
}

CompanyLogin.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default CompanyLogin;
