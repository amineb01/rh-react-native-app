import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  View,
  FlatList,
  Text,
} from 'react-native';
import { useSelector } from 'react-redux';

import styles from './styles';

import Button from '../common/Button';

import TextStyles from 'helpers/TextStyles';
import  strings  from 'localization';
import getTodos from 'selectors/TodosSelectors';

import { getTodosList, login, actionTypes } from 'actions/TodosActions';

const Todos = () => {
  const todosList = useSelector(state => getTodos(state));
  const dispatch = useDispatch();
  
  useEffect(() => {
  const todosFunc =   () => dispatch(getTodosList())
  todosFunc()
  },[]);

  return (
    <View style={styles.container}>
     <FlatList
       data={todosList}
       renderItem={({item}) => <Text style={styles.item}>{item.title}</Text>}
       keyExtractor={item => item.title+""}
     />
   </View>
  );
};

export default Todos;
