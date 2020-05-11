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
import getDemands from 'selectors/DemandsSelectors';
import {Card} from 'react-native-shadow-cards';

const Demands = () => {
  const demandsList = useSelector(state => getDemands(state));
  const sort_item = (a, b) => {
          if(a.stmp < b.stmp){
            return -1;
          }else if(a.stmp > b.stmp){
            return 1;
          }else{
            return 0;
          }
  }
  const sortedDemandsList = demandsList.sort(sort_item).reverse()
  return (
    <View style={styles.container}>
     <FlatList
       data={sortedDemandsList}
       renderItem={({item}) => <Card style={styles.card}>
       <Text style={styles.item}>{"motif: "+item.description}</Text>
       <Text style={styles.item}>{"de "+item.dd+" à "+item.df}</Text>
       </Card>
       }
       keyExtractor={item => item.stmp}
     />
   </View>
  );
};

export default Demands;
