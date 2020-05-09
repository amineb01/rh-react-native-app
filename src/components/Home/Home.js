import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  View,
  Text,
} from 'react-native';
import { useSelector } from 'react-redux';

import styles from './styles';

import Button from '../common/Button';

import TextStyles from 'helpers/TextStyles';
import  strings  from 'localization';
import getUser from 'selectors/UserSelectors';

const Home = ({ navigation }) => {
  const user = useSelector(state => getUser(state));
  const getMessage = useCallback(() => `${strings.homeMessage} ${user && user.name}`, [user]);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={TextStyles.lightTitle}>
        {strings.home}
      </Text>
      <Text>
        {getMessage()}
      </Text>
      <Button
       title="Go to Details"
       onPress={() => navigation.navigate('Todos')}
     />

    </View>
  );
};

export default Home;
