import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  View,
  Text,
} from 'react-native';

import Button from '../common/Button';
import styles from './styles';

import  strings  from 'localization';
import TextStyles from 'helpers/TextStyles';
import { logout } from 'actions/UserActions';
import getUser from 'selectors/UserSelectors';

function Profile() {
  const dispatch = useDispatch();
  const logoutUser = useCallback(() => dispatch(logout()), [dispatch]);
  const user = useSelector(state => getUser(state));
  return (
    <View style={styles.container}>
      <Text style={TextStyles.fieldTitle}>
        {user.data.user.last_name +' ' + user.data.user.first_name}
      </Text>
      <Text>
        {strings.profileMessage}
      </Text>
      <Button
        title={strings.logout}
        onPress={logoutUser}
      />
    </View>
  );
}

export default Profile;
